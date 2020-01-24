import { Schema, model } from 'mongoose';

const OrderSchema = new Schema(
  {
    refDay: {
      type: Schema.Types.ObjectId,
      ref: 'DayBalance',
    },
    products: [Object],
    value: Number,
  },
  {
    timestamps: true,
  }
);

export default model('Order', OrderSchema);
