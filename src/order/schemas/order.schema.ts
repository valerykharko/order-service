import { Schema, Document } from 'mongoose';

export const OrderSchema = new Schema({
  userId: { type: String, required: true },
  product: { type: String, required: true },
  quantity: { type: Number, required: true },
  status: { type: String, default: 'Pending' },
  createdAt: { type: Date, default: Date.now },
});

export interface Order extends Document {
  userId: string;
  product: string;
  quantity: number;
  status: string;
  createdAt: Date;
}
