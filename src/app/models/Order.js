import { Schema, model } from 'mongoose';

const OrderSchema = new Schema(
  {
    refDay: {
      type: Schema.Types.ObjectId,
      ref: 'DayBalance',
    },
    products: {
      type: [Schema.Types.ObjectId],
      ref: 'Product',
    },
    value: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

export default model('Order', OrderSchema);
