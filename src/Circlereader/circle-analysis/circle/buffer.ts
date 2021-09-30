// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

export class Buffer {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i: number, bb: flatbuffers.ByteBuffer): Buffer {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }

  static getRootAsBuffer(bb: flatbuffers.ByteBuffer, obj?: Buffer): Buffer {
    return (obj || new Buffer()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }

  static getSizePrefixedRootAsBuffer(bb: flatbuffers.ByteBuffer, obj?: Buffer): Buffer {
    bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
    return (obj || new Buffer()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }

  data(index: number): number|null {
    const offset = this.bb!.__offset(this.bb_pos, 4);
    return offset ? this.bb!.readUint8(this.bb!.__vector(this.bb_pos + offset) + index) : 0;
  }

  dataLength(): number {
    const offset = this.bb!.__offset(this.bb_pos, 4);
    return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
  }

  dataArray(): Uint8Array|null {
    const offset = this.bb!.__offset(this.bb_pos, 4);
    return offset ? new Uint8Array(
                        this.bb!.bytes().buffer,
                        this.bb!.bytes().byteOffset + this.bb!.__vector(this.bb_pos + offset),
                        this.bb!.__vector_len(this.bb_pos + offset)) :
                    null;
  }

  static startBuffer(builder: flatbuffers.Builder) {
    builder.startObject(1);
  }

  static addData(builder: flatbuffers.Builder, dataOffset: flatbuffers.Offset) {
    builder.addFieldOffset(0, dataOffset, 0);
  }

  static createDataVector(builder: flatbuffers.Builder, data: number[]|Uint8Array):
      flatbuffers.Offset {
    builder.startVector(1, data.length, 1);
    for (let i = data.length - 1; i >= 0; i--) {
      builder.addInt8(data[i]!);
    }
    return builder.endVector();
  }

  static startDataVector(builder: flatbuffers.Builder, numElems: number) {
    builder.startVector(1, numElems, 1);
  }

  static endBuffer(builder: flatbuffers.Builder): flatbuffers.Offset {
    const offset = builder.endObject();
    return offset;
  }

  static createBuffer(builder: flatbuffers.Builder, dataOffset: flatbuffers.Offset):
      flatbuffers.Offset {
    Buffer.startBuffer(builder);
    Buffer.addData(builder, dataOffset);
    return Buffer.endBuffer(builder);
  }
}
