// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

export class LeakyReluOptions {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i: number, bb: flatbuffers.ByteBuffer): LeakyReluOptions {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }

  static getRootAsLeakyReluOptions(bb: flatbuffers.ByteBuffer, obj?: LeakyReluOptions):
      LeakyReluOptions {
    return (obj || new LeakyReluOptions()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }

  static getSizePrefixedRootAsLeakyReluOptions(bb: flatbuffers.ByteBuffer, obj?: LeakyReluOptions):
      LeakyReluOptions {
    bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
    return (obj || new LeakyReluOptions()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }

  alpha(): number {
    const offset = this.bb!.__offset(this.bb_pos, 4);
    return offset ? this.bb!.readFloat32(this.bb_pos + offset) : 0.0;
  }

  static startLeakyReluOptions(builder: flatbuffers.Builder) {
    builder.startObject(1);
  }

  static addAlpha(builder: flatbuffers.Builder, alpha: number) {
    builder.addFieldFloat32(0, alpha, 0.0);
  }

  static endLeakyReluOptions(builder: flatbuffers.Builder): flatbuffers.Offset {
    const offset = builder.endObject();
    return offset;
  }

  static createLeakyReluOptions(builder: flatbuffers.Builder, alpha: number): flatbuffers.Offset {
    LeakyReluOptions.startLeakyReluOptions(builder);
    LeakyReluOptions.addAlpha(builder, alpha);
    return LeakyReluOptions.endLeakyReluOptions(builder);
  }
}
