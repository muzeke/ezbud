import { IHttpRequest } from '@shapes';
import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as jwt from 'jsonwebtoken';
import { jwtConfig } from '../../config';
import { getUserById } from '../../services/user/get';
import { authProvider } from './auth-provider';

export const VerifyAuthToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.headers.authorization?.replace('Bearer ', '');

    if (!token) {
      throw new Error(`Authentication is required!!!`);
    }

    const decodedAuth = await authProvider.verifyJwtToken(
      token,
      jwtConfig.secret,
      false
    );

    if (!decodedAuth) {
      throw new Error(`Authentication is required!!!`);
    }

    const user = await getUserById(decodedAuth.indentity);

    if (!user) {
      throw new Error(`Authentication is required!`);
    }

    req['user'] = user;

    next();
  } catch (error) {
    console.log(`error =>`, error.message);
    res.status(StatusCodes.UNAUTHORIZED).json({
      message: error.message,
      error: error.stack,
    });
  }
};
