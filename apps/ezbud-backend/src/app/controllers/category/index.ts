import { Router } from 'express';
import { processRequestBody } from 'zod-express-middleware';

import { ApiRoute } from '@enums';

import { expressRouterHandler } from '../../middlewares';
import { CategoryController } from './controller';
import { createCategory } from './validator';

export const categoryRoutes = Router();

categoryRoutes.post(
  ApiRoute.category__create,
  processRequestBody(createCategory.body),
  expressRouterHandler(CategoryController().createCategory)
);
