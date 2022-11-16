import { Types } from 'mongoose';

export interface BudgetAccountAttributes {
  _id?: Types.ObjectId;
  user: Types.ObjectId;
  name: string;
  balance?: number;
  currency?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
