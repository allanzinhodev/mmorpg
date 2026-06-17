import { BinaryReader } from '../../src/network/BinaryReader.js';
import { parseCreatureMove } from '../../src/network/parsers.js';

test('parseCreatureMove extrai campos corretamente', () => {
  const buf = new ArrayBuffer(14);
  const view = new DataView(buf);
  view.setUint32(0, 1001, true);   // creatureId
  view.setUint16(4, 100, true);    // fromX
  view.setUint16(6, 200, true);    // fromY
  view.setUint8(8, 7);             // fromZ
  view.setUint16(9, 101, true);    // toX
  view.setUint16(11, 200, true);   // toY
  view.setUint8(13, 7);            // toZ
  
  const reader = new BinaryReader(buf);
  const result = parseCreatureMove(reader);
  expect(result).toEqual({ 
    creatureId: 1001, 
    fromX: 100, 
    fromY: 200, 
    fromZ: 7, 
    toX: 101, 
    toY: 200, 
    toZ: 7 
  });
});
