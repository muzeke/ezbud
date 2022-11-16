import { CreateCategory } from './create';

export const CategoryController = () => {
  return {
    createCategory: () => {
      return CreateCategory();
    },
  };
};
