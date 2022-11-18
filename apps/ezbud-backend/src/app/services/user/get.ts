import { UserModel } from '../../database/mongodb-atlas/models';

export const getUserByUsername = async (username: string) => {
  const response = await UserModel.findOne({ username });

  return response ? response : null;
};

export const getUserById = async (_id: string) => {
  const response = await UserModel.findOne({ _id });

  return response ? response.toJSON() : null;
};
