import chalk = require('chalk');
import { Request } from 'express';

import { LoginAttributes } from '@shapes';

import { getUserByUsername } from '../../services/user/get';
import { routerResponse } from '../../utils';
import { jwtConfig } from '../../config';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';

export const Login = () => {
  const route = async (httpRequest: Request<never, never, LoginAttributes>) => {
    const { body } = httpRequest;
    const { username, password } = body;
    try {
      const user = await getUserByUsername(username);

      if (!user) {
        throw new Error(`No user found for this email address`);
      }
      console.log(`user -->`, user);
      console.log(`user -->`, password);

      const passwordMatched = await bcrypt.compare(password, user.password);

      if (!passwordMatched) {
        throw new Error(`Password is incorrect!`);
      }

      const jwtSecret = jwtConfig.secret;
      const jwtPayload = { id: user.id, email: user.username };
      const token = jwt.sign(jwtPayload, jwtSecret, {
        expiresIn: jwtConfig.tokenExpirationDate,
      });

      return routerResponse.Created({
        user: user,
        token: `Bearer ${token}`,
      });
    } catch (error) {
      console.error(chalk.red(`Error -->`, error));
      return routerResponse.InvalidParameterValue({
        error,
        message: error.message,
      });
    }
  };

  return { route };
};
