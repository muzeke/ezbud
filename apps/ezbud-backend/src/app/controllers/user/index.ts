import { Router } from 'express';
import { UserController } from './controller';
import { processRequestBody } from 'zod-express-middleware';
import { createUserSchema } from './validator';
import { ApiRoutes } from '@enums';

export const userRoutes = Router();

userRoutes.post(
  ApiRoutes.user__create,
  processRequestBody(createUserSchema.body),
  UserController().createUser()
);
