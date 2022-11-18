import { CategoryGroupAttributes } from '@shapes';
import chalk = require('chalk');
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { createCategoryGroup } from '../../services';
import { routerResponse } from '../../utils';

export const CreateCategoryGroup = () => {
  const route = async (
    httpRequest: Request<never, never, CategoryGroupAttributes>
  ) => {
    const { body } = httpRequest;
    const { title, user } = body;
    try {
      const response = await createCategoryGroup({ title, user });

      return routerResponse.Created(response);
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
