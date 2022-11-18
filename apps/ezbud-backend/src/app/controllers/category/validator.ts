import {
  any,
  object,
  string,
} from 'zod';

export const createCategory = {
  body: object({
    user: any({
      required_error: 'user is required',
    }),
    categoryGroup: any({
      required_error: 'categoryGroupId is required',
    }),
    name: string({
      required_error: 'name is required',
    })
      .min(3, 'name must be at least 3 characters long')
      .max(30, 'name should not be longer than 30 characters'),
  }),
};
