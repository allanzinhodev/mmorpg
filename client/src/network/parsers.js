export class ParseError extends Error {
  constructor(message) {
    super(message);
    this.name = "ParseError";
  }
}

export function parseCreatureMove(reader) {
  if (reader.buffer.byteLength < 13) {
    throw new ParseError("Buffer too small for CREATURE_MOVE");
  }
  return {
    creatureId: reader.readUint32(),
    fromX: reader.readUint16(),
    fromY: reader.readUint16(),
    fromZ: reader.readUint8(),
    toX: reader.readUint16(),
    toY: reader.readUint16(),
    toZ: reader.readUint8()
  };
}

export function parseLoginOk(reader) {
  return {
    playerId: reader.readUint32(),
    speed: reader.readUint16()
  };
}

export function parseAddCreature(reader) {
  return {
    creatureId: reader.readUint32(),
    name: reader.readString(),
    x: reader.readUint16(),
    y: reader.readUint16(),
    z: reader.readUint8(),
    direction: reader.readUint8(),
    outfitId: reader.readUint16()
  };
}
