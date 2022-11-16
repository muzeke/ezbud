import { CreateUser } from './create';

export const UserController = () => {
  return {
    createUser: () => {
      return CreateUser();
    },
  };
};
