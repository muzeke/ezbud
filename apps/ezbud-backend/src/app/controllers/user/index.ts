import { Router } from 'express';
import { processRequestBody } from 'zod-express-middleware';

import { ApiRoute } from '@enums';

import { expressRouterHandler } from '../../middlewares';
import { UserController } from './controller';
import { createUserSchema } from './validator';

export const userRoutes = Router();

userRoutes.post(
  ApiRoute.user__create,
  processRequestBody(createUserSchema.body),
  expressRouterHandler(UserController().createUser)
);
