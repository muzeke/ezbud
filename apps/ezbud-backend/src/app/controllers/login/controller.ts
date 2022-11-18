import { Login } from './login';

export const LoginController = () => {
  return {
    login: () => {
      return Login();
    },
  };
};
