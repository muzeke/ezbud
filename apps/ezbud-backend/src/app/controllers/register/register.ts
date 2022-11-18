import * as bcrypt from 'bcrypt';
import chalk = require('chalk');
import { Request } from 'express';

import { UserAttributes } from '@shapes';

import { createUser } from '../../services';
import { routerResponse } from '../../utils';
import * as jwt from 'jsonwebtoken';
import { jwtConfig } from '../../config';
import { getUserByUsername } from '../../services/user/get';

export const Register = () => {
  const route = async (httpRequest: Request<never, never, UserAttributes>) => {
    const { body } = httpRequest;
    const { username, password } = body;
    try {
      const user = await getUserByUsername(username);

      if (user) {
        throw new Error('User exists');
      }

      const passwordSalt = await bcrypt.genSalt(10);
      const passwordHash = await bcrypt.hash(password, passwordSalt);
      const response = await createUser({ username, password: passwordHash });

      const jwtSecret = jwtConfig.secret;
      const jwtPayload = { id: response.id, email: response.username };
      const token = jwt.sign(jwtPayload, jwtSecret, {
        expiresIn: jwtConfig.tokenExpirationDate,
      });

      return routerResponse.Created({
        user: response,
        token: `Bearer ${token}`,
      });
    } catch (error) {
      console.error(chalk.red(`Error -->`, error.stack));
      return routerResponse.InvalidParameterValue({
        error: error.message,
        message: 'An error occured while create a user account',
      });
    }
  };

  return { route };
};
