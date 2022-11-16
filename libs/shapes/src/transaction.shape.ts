import { Types } from 'mongoose';

export interface TransactionAttributes {
  _id?: Types.ObjectId;
  user: Types.ObjectId;
  category?: Types.ObjectId;
  payee?: string;
  memo?: string;
  outflow?: number;
  inflow?: number;
  status?: string;
  createdAt?: Date;
  updatedAt?: Date;
  date: Date;
}
