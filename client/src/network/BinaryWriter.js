export class BinaryWriter {
  constructor(initialSize = 1024) {
    this.buffer = new ArrayBuffer(initialSize);
    this.view = new DataView(this.buffer);
    this.offset = 0;
  }

  ensureCapacity(size) {
    if (this.offset + size > this.buffer.byteLength) {
      const newBuffer = new ArrayBuffer(this.buffer.byteLength * 2);
      new Uint8Array(newBuffer).set(new Uint8Array(this.buffer));
      this.buffer = newBuffer;
      this.view = new DataView(this.buffer);
    }
  }

  writeUint8(val) {
    this.ensureCapacity(1);
    this.view.setUint8(this.offset, val);
    this.offset += 1;
  }

  writeUint16(val) {
    this.ensureCapacity(2);
    this.view.setUint16(this.offset, val, true); // little endian
    this.offset += 2;
  }

  writeUint32(val) {
    this.ensureCapacity(4);
    this.view.setUint32(this.offset, val, true);
    this.offset += 4;
  }

  writeString(str) {
    this.writeUint16(str.length);
    this.ensureCapacity(str.length);
    for (let i = 0; i < str.length; i++) {
      this.view.setUint8(this.offset, str.charCodeAt(i));
      this.offset += 1;
    }
  }

  getBuffer() {
    return this.buffer.slice(0, this.offset);
  }
}
