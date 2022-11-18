import { UserAttributes } from '@shapes';

import { UserModel } from '../../database/mongodb-atlas/models';

export const createUser = async (user: UserAttributes) => {
  const newUser = new UserModel({ ...user });
  const response = await newUser.save();

  return response.toJSON();
};
