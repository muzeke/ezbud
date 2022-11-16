import { object, string, any } from 'zod';

export const createCategorySchema = {
  body: object({
    user: any({
      required_error: 'userId is required',
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
