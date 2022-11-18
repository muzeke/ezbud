import chalk = require('chalk');
import { Request } from 'express';

import { CategoryAttributes } from '@shapes';

import { createCategory } from '../../services';
import { routerResponse } from '../../utils';

export const CreateCategory = () => {
  const route = async (
    httpRequest: Request<never, never, CategoryAttributes>
  ) => {
    const { body } = httpRequest;
    const { name, user, categoryGroup } = body;

    //try catch block for error handling
    try {
      const response = await createCategory({ name, user, categoryGroup });

      return routerResponse.Created<CategoryAttributes>(response);
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
