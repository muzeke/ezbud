import chalk = require('chalk');
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { readCategoryGroup, readOneCategoryGroup } from '../../services';
import { ApiParams } from '@shapes';

//Create the controller route
export const ReadOneCategoryGroup = () => {
  //function that we will return as an async route handler
  const route = async (
    httpRequest: Request<ApiParams, never, never>,
    httpResponse: Response
  ) => {
    const { params } = httpRequest;

    const _id = params.categoryGroupId;
    //try catch block for error handling
    try {
      const response = await readOneCategoryGroup({ _id });

      if (response) {
        httpResponse.status(StatusCodes.CREATED).json(response);
      } else {
        httpResponse.status(StatusCodes.NOT_FOUND).json({
          error: 'Category not found',
        });
      }

      return response;
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

//Create the controller route
export const ReadCategoryGroup = () => {
  //function that we will return as an async route handler
  const route = async (
    httpRequest: Request<any, never, never>,
    httpResponse: Response
  ) => {
    //try catch block for error handling
    try {
      const response = await readCategoryGroup();

      if (response) {
        httpResponse.status(StatusCodes.CREATED).json(response);
      } else {
        httpResponse.status(StatusCodes.NOT_FOUND).json({
          error: 'Category not found',
        });
      }

      return response;
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
