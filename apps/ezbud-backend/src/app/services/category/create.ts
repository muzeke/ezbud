import { CategoryAttributes } from '@shapes';
import { FlattenMaps, LeanDocument } from 'mongoose';
import { CategoryModel } from '../../database/mongodb-atlas/models';

export const createCategory = async (
  categoryGroup: CategoryAttributes
): Promise<FlattenMaps<LeanDocument<CategoryAttributes>>> => {
  const newCategory = new CategoryModel({ ...categoryGroup });
  const response = await newCategory.save();

  return response.toJSON();
};
