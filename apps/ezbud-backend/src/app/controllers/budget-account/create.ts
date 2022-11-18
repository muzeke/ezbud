import chalk = require('chalk');
import {
  Request,
  Response,
} from 'express';
import { StatusCodes } from 'http-status-codes';

import { BudgetAccountAttributes } from '@shapes';

import { createBudgetAccount } from '../../services';

export const CreateBudgetAccount = () => {
  const route = async (
    httpRequest: Request<never, never, BudgetAccountAttributes>,
    httpResponse: Response
  ) => {
    const { body } = httpRequest;
    const { user, name } = body;

    //try catch block for error handling
    try {
      const response = await createBudgetAccount({ name, user });

      return httpResponse.status(StatusCodes.CREATED).json({
        success: true,
        message: 'Budget Account was successfully added',
        details: {
          ...response,
        },
      });
    } catch (error) {
      console.error(chalk.red(`Error -->`, error));
      httpResponse.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        error: 'An error occured while creating a budget account',
        message: error,
      });
    }
  };

  return route;
};
