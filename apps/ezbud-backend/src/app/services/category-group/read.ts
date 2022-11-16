import { ModelSchema } from '@enums';
import { CategoryGroupAttributes, CategoryGroupFilter } from '@shapes';
import { CategoryGroupModel } from '../../database/mongodb-atlas/models';

export const readOneCategoryGroup = (
  categoryGroupFilter: CategoryGroupFilter
) => {
  const { _id } = categoryGroupFilter;

  const category = CategoryGroupModel.findOne({
    _id,
  });

  return category;
};

export const readCategoryGroup = async (
  categoryGroupFilter?: CategoryGroupFilter
): Promise<CategoryGroupAttributes[]> => {
  const categoryGroup = await CategoryGroupModel.find({}).populate(
    ModelSchema.User
  );

  return categoryGroup;
};
