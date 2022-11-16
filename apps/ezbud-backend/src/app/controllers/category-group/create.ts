import { CategoryGroupAttributes } from '@shapes';
import chalk = require('chalk');
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { createCategoryGroup } from '../../services';

//Create the controller route
export const CreateCategoryGroup = () => {
  //function that we will return as an async route handler
  const route = async (
    httpRequest: Request<never, never, CategoryGroupAttributes>,
    httpResponse: Response
  ) => {
    const { body } = httpRequest;
    const { title, user } = body;
    try {
      const response = await createCategoryGroup({ title, user });

      return httpResponse.status(StatusCodes.CREATED).json({
        success: true,
        message: 'Category group was successfully added',
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
