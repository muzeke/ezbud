import { object, string, any } from 'zod';

export const createCategoryGroupSchema = {
  body: object({
    user: any({
      required_error: 'user is required',
    }),
    title: string({
      required_error: 'title is required',
    })
      .min(4, 'Title must be at least 6 characters long')
      .max(30, 'Title should not be longer than 30 characters'),
  }),
};
