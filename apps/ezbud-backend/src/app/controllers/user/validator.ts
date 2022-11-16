import { object, string } from 'zod';

export const createUserSchema = {
  body: object({
    username: string({
      required_error: 'Username is required',
    }),

    password: string({
      required_error: 'Password is required',
    })
      .min(6, 'Password must be at least 6 characters long')
      .max(64, 'Password should not be longer than 64 characters'),
  }),
};
