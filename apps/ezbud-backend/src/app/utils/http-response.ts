import { StatusCodes } from 'http-status-codes';

export interface IHttpResponse {
  statusCode: number;
  body?: any;
  cacheControl?: string;
}

const createHttpResponse = <T>(statusCode: number, body: T) => {
  const httpResponse: IHttpResponse = {
    statusCode,
  };

  if (body) {
    httpResponse.body = body;
  }

  return httpResponse;
};

export const routerResponse = {
  Ok: <T>(body: T) => {
    return createHttpResponse(StatusCodes.OK, body);
  },

  Created: <T>(body: T) => {
    return createHttpResponse(StatusCodes.CREATED, body);
  },

  InvalidParameterValue: <T>(body: T) => {
    return createHttpResponse(StatusCodes.BAD_REQUEST, body);
  },

  Unauthorized: <T>(body: T) => {
    return createHttpResponse(StatusCodes.UNAUTHORIZED, body);
  },

  Forbidden: <T>(body: T) => {
    return createHttpResponse(StatusCodes.FORBIDDEN, body);
  },

  NotFound: <T>(body: T) => {
    return createHttpResponse(StatusCodes.NOT_FOUND, body);
  },
};
