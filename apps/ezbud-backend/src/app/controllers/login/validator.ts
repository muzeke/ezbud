import { object, string } from 'zod';

export const loginSchema = {
  body: object({
    username: string({
      required_error: 'username is required',
    }).email('Not a valid email address'),
    password: string({
      required_error: 'password is required',
    }),
  }),
};
