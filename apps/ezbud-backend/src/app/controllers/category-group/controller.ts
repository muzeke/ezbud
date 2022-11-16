import { CreateCategoryGroup } from './create';
import { ReadOneCategoryGroup, ReadCategoryGroup } from './read';

export const CategoryGroupController = () => {
  return {
    createCategoryGroup: () => {
      return CreateCategoryGroup();
    },
    readOneCategoryGroup: () => {
      return ReadOneCategoryGroup();
    },
    readCategoryGroup: () => {
      return ReadCategoryGroup();
    },
  };
};
