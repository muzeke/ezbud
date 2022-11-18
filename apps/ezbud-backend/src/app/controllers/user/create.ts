import chalk = require('chalk');
import { Request } from 'express';

import { UserAttributes } from '@shapes';

import { createUser } from '../../services';
import { routerResponse } from '../../utils';

export const CreateUser = () => {
  const route = async (httpRequest: Request<never, never, UserAttributes>) => {
    const { body } = httpRequest;
    const { username, password } = body;
    try {
      const response = await createUser({ username, password });

      return routerResponse.Created<UserAttributes>(response);
    } catch (error) {
      console.error(chalk.red(`Error -->`, error));
      return routerResponse.InvalidParameterValue({
        error,
        message: 'An error occured while create a user account',
      });
    }
  };

  return { route };
};
