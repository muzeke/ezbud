import {
  FlattenMaps,
  LeanDocument,
} from 'mongoose';

import { CategoryAttributes } from '@shapes';

import { CategoryModel } from '../../database/mongodb-atlas/models';

export const createCategory = async (
  category: CategoryAttributes
): Promise<FlattenMaps<LeanDocument<CategoryAttributes>>> => {
  const newCategory = new CategoryModel({ ...category });
  const response = await newCategory.save();

  return response.toJSON();
};
