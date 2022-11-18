import { Router } from 'express';

import { ApiRoute } from '@enums';

import { expressRouterHandler } from '../../middlewares';
import { RegisterController } from './controller';
import { processRequestBody } from 'zod-express-middleware';
import { registerSchema } from './validator';

export const registerRoutes = Router();

registerRoutes.post(
  ApiRoute.register,
  processRequestBody(registerSchema.body),
  expressRouterHandler(RegisterController().register)
);
