import { Schema, model } from 'mongoose';

const DayBalanceSchema = new Schema(
  {
    day: {
      type: Date,
      required: true,
      unique: true,
    },
    ownerId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    orders: {
      type: [Schema.Types.ObjectId],
      ref: 'Order',
    },
    total: Number,
  },
  {
    timestamps: true,
  }
);

export default model('DayBalance', DayBalanceSchema);
