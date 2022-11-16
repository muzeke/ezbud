import { CategoryGroupAttributes } from '@shapes';
import { FlattenMaps, LeanDocument } from 'mongoose';
import { CategoryGroupModel } from '../../database/mongodb-atlas/models';

export const createCategoryGroup = async (
  categoryGroup: CategoryGroupAttributes
): Promise<FlattenMaps<LeanDocument<CategoryGroupAttributes>>> => {
  const newCategoryGroup = new CategoryGroupModel({ ...categoryGroup });

  const response = await newCategoryGroup.save();

  return response.toJSON();
};
