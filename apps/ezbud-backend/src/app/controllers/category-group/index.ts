import { Router } from 'express';
import { CategoryGroupController } from './controller';
import { processRequestBody } from 'zod-express-middleware';
import { createCategoryGroupSchema } from './validator';
import { ApiRoutes } from '@enums';

export const categoryGroupRoutes = Router();

categoryGroupRoutes.post(
  ApiRoutes.category_group__create,
  processRequestBody(createCategoryGroupSchema.body),
  CategoryGroupController().createCategoryGroup()
);

categoryGroupRoutes.get(
  ApiRoutes.category_group__read,
  CategoryGroupController().readCategoryGroup()
);

categoryGroupRoutes.get(
  `${ApiRoutes.category_group__read}/:categoryGroupId`,
  CategoryGroupController().readOneCategoryGroup()
);
