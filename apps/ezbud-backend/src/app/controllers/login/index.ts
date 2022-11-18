import { Router } from 'express';

import { ApiRoute } from '@enums';

import { expressRouterHandler } from '../../middlewares';
import { LoginController } from './controller';
import { loginSchema } from './validator';
import { processRequestBody } from 'zod-express-middleware';

export const loginRoutes = Router();

loginRoutes.post(
  ApiRoute.login,
  processRequestBody(loginSchema.body),
  expressRouterHandler(LoginController().login)
);
