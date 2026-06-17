const fs = require('fs');
const { createCanvas } = require('canvas');

const KEEP_ITEMS_COUNT = 150; // Keeps first 150 items (includes basic grounds/walls)
const KEEP_CREATURES_COUNT = 10; // Keeps first 10 outfits (includes citizen)
const KEEP_EFFECTS_COUNT = 10;
const KEEP_MISSILES_COUNT = 10;

// Load files
const datBuffer = fs.readFileSync('../../client-cpp/data/graphics/sertaria.dat');
const sprBuffer = fs.readFileSync('../../client-cpp/data/graphics/sertaria.spr');

console.log("Files loaded.");

let datOffset = 0;
function readU8() { const val = datBuffer.readUInt8(datOffset); datOffset += 1; return val; }
function readU16() { const val = datBuffer.readUInt16LE(datOffset); datOffset += 2; return val; }
function readU32() { const val = datBuffer.readUInt32LE(datOffset); datOffset += 4; return val; }
function readString() { const len = readU16(); const str = datBuffer.toString('utf8', datOffset, datOffset + len); datOffset += len; return str; }

const datSignature = readU32();
const originalCounts = [];
for(let i=0; i<4; i++) originalCounts.push(readU16() + 1);

const newCounts = [
    Math.min(originalCounts[0], KEEP_ITEMS_COUNT),
    Math.min(originalCounts[1], KEEP_CREATURES_COUNT),
    Math.min(originalCounts[2], KEEP_EFFECTS_COUNT),
    Math.min(originalCounts[3], KEEP_MISSILES_COUNT)
];

const spriteWhitelist = new Set();
const newDatChunks = []; // array of buffers

// New Header
const newHeader = Buffer.alloc(12);
newHeader.writeUInt32LE(datSignature, 0);
newHeader.writeUInt16LE(newCounts[0] - 1, 4);
newHeader.writeUInt16LE(newCounts[1] - 1, 6);
newHeader.writeUInt16LE(newCounts[2] - 1, 8);
newHeader.writeUInt16LE(newCounts[3] - 1, 10);
newDatChunks.push(newHeader);

function processThingType(category, id, keep) {
    const startOffset = datOffset;
    let attr;
    while(true) {
        attr = readU8();
        if(attr === 255) break;
        let modAttr = attr;
        if(modAttr === 16) modAttr = 253;
        else if(modAttr > 16) modAttr -= 1;
        
        switch(modAttr) {
            case 24: case 21: readU16(); readU16(); break;
            case 33: readU16(); readU16(); readU16(); readString(); readU16(); readU16(); break;
            case 25: readU16(); break;
            case 34: case 0: case 8: case 9: case 28: case 32: case 29: readU16(); break;
            case 38: for(let b=0; b<8; b++) readU16(); break;
        }
    }

    let hasFrameGroups = (category === 1);
    let groupCount = hasFrameGroups ? readU8() : 1;
    let totalSprites = 0;
    for(let i = 0; i < groupCount; i++) {
        if(hasFrameGroups) readU8();
        let width = readU8();
        let height = readU8();
        if (width > 1 || height > 1) readU8();
        let layers = readU8();
        let patternX = readU8();
        let patternY = readU8();
        let patternZ = readU8();
        let animationsPhases = readU8();
        if (animationsPhases > 1) {
            readU8(); readU32(); readU8();
            for(let j = 0; j < animationsPhases; j++) { readU32(); readU32(); }
        }
        let numSprites = width * height * layers * patternX * patternY * patternZ * animationsPhases;
        for(let j = 0; j < numSprites; j++) {
            const sprId = readU32();
            if(keep && sprId > 0) spriteWhitelist.add(sprId);
        }
    }
    
    if(keep) {
        newDatChunks.push(datBuffer.slice(startOffset, datOffset));
    }
}

// Parse DAT
for(let category = 0; category < 4; category++) {
    let firstId = (category === 0) ? 100 : 1;
    for(let id = firstId; id < originalCounts[category]; id++) {
        let keep = id < newCounts[category];
        processThingType(category, id, keep);
    }
}

const newDatBuffer = Buffer.concat(newDatChunks);
console.log(`DAT parsing complete. Sprites to keep: ${spriteWhitelist.size}`);

// Write new DAT
fs.writeFileSync('slim_sertaria.dat', newDatBuffer);
console.log(`Saved slim_sertaria.dat (Size: ${(newDatBuffer.length/1024).toFixed(2)} KB)`);

// Sprites Logic
const sprSignature = sprBuffer.readUInt32LE(0);
const sprCount = sprBuffer.readUInt32LE(4);
const sprOffset = 8;

let newSprAddressOffset = 8;
const newSpriteAddresses = [];
const newSprDataChunks = [];

for(let id = 1; id <= sprCount; id++) {
    if(!spriteWhitelist.has(id)) {
        newSpriteAddresses.push(0);
        continue;
    }
    const address = sprBuffer.readUInt32LE(sprOffset + (id - 1) * 4);
    if(address === 0) {
        newSpriteAddresses.push(0);
        continue;
    }
    
    const pixelDataSize = sprBuffer.readUInt16LE(address + 3);
    const totalDataSize = 3 + 2 + pixelDataSize; // colorKey(3) + size(2) + payload
    
    const spriteData = sprBuffer.slice(address, address + totalDataSize);
    newSprDataChunks.push(spriteData);
    newSpriteAddresses.push('placeholder_address_' + newSprDataChunks.length);
}

// Build new SPR
let currentSprAddress = 8 + (sprCount * 4);
const sprHeader = Buffer.alloc(8 + (sprCount * 4));
sprHeader.writeUInt32LE(sprSignature, 0);
sprHeader.writeUInt32LE(sprCount, 4);

for(let id = 1; id <= sprCount; id++) {
    const val = newSpriteAddresses[id - 1];
    if(val === 0) {
        sprHeader.writeUInt32LE(0, 8 + (id - 1) * 4);
    } else {
        sprHeader.writeUInt32LE(currentSprAddress, 8 + (id - 1) * 4);
        currentSprAddress += newSprDataChunks[parseInt(val.split('_')[2]) - 1].length;
    }
}

const newSprBuffer = Buffer.concat([sprHeader, ...newSprDataChunks]);
fs.writeFileSync('slim_sertaria.spr', newSprBuffer);
console.log(`Saved slim_sertaria.spr (Size: ${(newSprBuffer.length/1024/1024).toFixed(2)} MB)`);


// === ATLAS GENERATION ===
const ATLAS_COLS = 64;
const ROWS = Math.ceil(spriteWhitelist.size / ATLAS_COLS);
const canvas = createCanvas(ATLAS_COLS * 32, ROWS * 32);
const ctx = canvas.getContext('2d');

const atlasJson = { frames: {} };
let spritesExported = 0;

const sortedWhitelist = Array.from(spriteWhitelist).sort((a,b)=>a-b);

for(const id of sortedWhitelist) {
    const address = sprBuffer.readUInt32LE(sprOffset + (id - 1) * 4);
    if(address === 0) continue;
    
    const pixelDataSize = sprBuffer.readUInt16LE(address + 3);
    
    // Draw onto canvas
    const imgData = ctx.createImageData(32, 32);
    const pixels = imgData.data;
    
    let readPos = address + 5;
    let writePos = 0;
    let bytesRead = 0;
    
    while(bytesRead < pixelDataSize && writePos < 32 * 32 * 4) {
        const trans = sprBuffer.readUInt16LE(readPos); readPos+=2;
        const colored = sprBuffer.readUInt16LE(readPos); readPos+=2;
        bytesRead += 4;
        
        writePos += trans * 4;
        for(let c = 0; c < colored; c++) {
            pixels[writePos++] = sprBuffer.readUInt8(readPos++);
            pixels[writePos++] = sprBuffer.readUInt8(readPos++);
            pixels[writePos++] = sprBuffer.readUInt8(readPos++);
            pixels[writePos++] = 255; // Alpha
            bytesRead += 3;
        }
    }
    
    const col = spritesExported % ATLAS_COLS;
    const row = Math.floor(spritesExported / ATLAS_COLS);
    
    ctx.putImageData(imgData, col * 32, row * 32);
    
    atlasJson.frames[id] = {
        x: col * 32, y: row * 32, w: 32, h: 32
    };
    spritesExported++;
}

fs.writeFileSync('atlas.png', canvas.toBuffer('image/png'));
fs.writeFileSync('atlas.json', JSON.stringify(atlasJson));
console.log(`Saved atlas.png and atlas.json (Exported ${spritesExported} sprites)`);
