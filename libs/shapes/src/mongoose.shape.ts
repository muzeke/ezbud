import { UserAttributes } from './user.shape';

export interface MongooseAttributes extends UserAttributes {
  id: string;
  _id: string;
  __v: number;
}
