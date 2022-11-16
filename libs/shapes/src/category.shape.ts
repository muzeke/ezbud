import { Types } from 'mongoose';

export interface CategoryAttributes {
  _id?: Types.ObjectId;
  user: Types.ObjectId;
  categoryGroup: Types.ObjectId;
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
}
