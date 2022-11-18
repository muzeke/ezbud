import { Register } from './register';

export const RegisterController = () => {
  return {
    register: () => {
      return Register();
    },
  };
};
