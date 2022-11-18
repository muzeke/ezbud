import { Router } from 'express';
import { processRequestBody } from 'zod-express-middleware';

import { ApiRoute } from '@enums';

import { BudgetAccountController } from './controller';
import { createBudgetAccountSchema } from './validator';

export const budgetAccountRoutes = Router();

budgetAccountRoutes.post(
  ApiRoute.budget_account__create,
  processRequestBody(createBudgetAccountSchema.body),
  BudgetAccountController().createbudgetAccount()
);
