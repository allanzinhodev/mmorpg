export class BinaryReader {
  constructor(buffer) {
    this.buffer = buffer;
    this.view = new DataView(buffer);
    this.offset = 0;
  }

  readUint8() {
    const val = this.view.getUint8(this.offset);
    this.offset += 1;
    return val;
  }

  readUint16() {
    const val = this.view.getUint16(this.offset, true); // little endian
    this.offset += 2;
    return val;
  }

  readUint32() {
    const val = this.view.getUint32(this.offset, true);
    this.offset += 4;
    return val;
  }

  readString() {
    const len = this.readUint16();
    let str = "";
    for (let i = 0; i < len; i++) {
      str += String.fromCharCode(this.readUint8());
    }
    return str;
  }

  hasRemaining() {
    return this.offset < this.buffer.byteLength;
  }
}
