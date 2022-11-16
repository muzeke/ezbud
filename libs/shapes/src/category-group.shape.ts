import { Types } from 'mongoose';

export interface CategoryGroupAttributes {
  title: string;
  user: Types.ObjectId;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface CategoryGroupFilter {
  _id?: Types.ObjectId;
  title?: string;
}
