import { UserAttributes } from '@shapes';
import { FlattenMaps, LeanDocument } from 'mongoose';
import { UserModel } from '../../database/mongodb-atlas/models';

export const createUser = async (
  user: UserAttributes
): Promise<FlattenMaps<LeanDocument<UserAttributes>>> => {
  const newUser = new UserModel({ ...user });
  const response = await newUser.save();

  return response.toJSON();
};
