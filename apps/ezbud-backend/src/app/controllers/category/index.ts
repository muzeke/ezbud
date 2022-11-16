import { Router } from 'express';
import { CategoryController } from './controller';
import { processRequestBody } from 'zod-express-middleware';
import { createCategorySchema } from './validator';
import { ApiRoutes } from '@enums';

export const categoryRoutes = Router();

categoryRoutes.post(
  ApiRoutes.category__create,
  processRequestBody(createCategorySchema.body),
  CategoryController().createCategory()
);
