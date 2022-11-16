import { UserAttributes } from '@shapes';
import chalk = require('chalk');
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { createUser } from '../../services';
//Create the user controller route
export const CreateUser = () => {
  //function that we will return as an async route handler
  const route = async (
    httpRequest: Request<never, never, UserAttributes>,
    httpResponse: Response
  ) => {
    const { body } = httpRequest;
    const { username, password } = body;
    //try catch block for error handling
    try {
      const response = await createUser({ username, password });

      return httpResponse.status(StatusCodes.CREATED).json({
        success: true,
        message: 'User has been created successfully',
        details: {
          ...response,
        },
      });
    } catch (error) {
      console.error(chalk.red(`Error -->`, error));
      httpResponse.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        error: 'An error occured while creating a user account',
        message: error,
      });
    }
  };

  return route;
};
