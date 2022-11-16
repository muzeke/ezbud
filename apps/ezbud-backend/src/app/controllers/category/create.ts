import { CategoryAttributes } from '@shapes';
import chalk = require('chalk');
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { createCategory } from '../../services';

export const CreateCategory = () => {
  const route = async (
    httpRequest: Request<never, never, CategoryAttributes>,
    httpResponse: Response
  ) => {
    const { body } = httpRequest;
    const { name, user, categoryGroup } = body;

    //try catch block for error handling
    try {
      const response = await createCategory({ name, user, categoryGroup });

      return httpResponse.status(StatusCodes.CREATED).json({
        success: true,
        message: 'Category was successfully added',
        details: {
          ...response,
        },
      });
    } catch (error) {
      console.error(chalk.red(`Error -->`, error));
      httpResponse.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        error: 'An error occured while creating a category group',
        message: error,
      });
    }
  };

  return route;
};
