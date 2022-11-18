import { Router } from 'express';
import { CategoryGroupController } from './controller';
import { processRequestBody } from 'zod-express-middleware';
import { createCategoryGroupSchema } from './validator';
import { ApiRoute } from '@enums';
import { VerifyAuthToken, expressRouterHandler } from '../../middlewares';

export const categoryGroupRoutes = Router();

categoryGroupRoutes.post(
  ApiRoute.category_group__create,
  processRequestBody(createCategoryGroupSchema.body),
  VerifyAuthToken,
  expressRouterHandler(CategoryGroupController().createCategoryGroup)
);

categoryGroupRoutes.get(
  ApiRoute.category_group__read,
  VerifyAuthToken,
  expressRouterHandler(CategoryGroupController().readCategoryGroup)
);

categoryGroupRoutes.get(
  `${ApiRoute.category_group__read}/:categoryGroupId`,
  VerifyAuthToken,
  expressRouterHandler(CategoryGroupController().readOneCategoryGroup)
);
