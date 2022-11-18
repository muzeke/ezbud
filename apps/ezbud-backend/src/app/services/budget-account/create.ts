import {
  FlattenMaps,
  LeanDocument,
} from 'mongoose';

import { BudgetAccountAttributes } from '@shapes';

import { BudgetAccountModel } from '../../database/mongodb-atlas/models';

export const createBudgetAccount = async (
  budgetAccount: BudgetAccountAttributes
): Promise<FlattenMaps<LeanDocument<BudgetAccountAttributes>>> => {
  const newDocument = new BudgetAccountModel({ ...budgetAccount });
  const response = await newDocument.save();

  return response.toJSON();
};
