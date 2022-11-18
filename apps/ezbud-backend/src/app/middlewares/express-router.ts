import { IHttpRequest, UserAttributes } from '@shapes';
import { Request, Response } from 'express';

export type RouterType = () => any;

export const expressRouterHandler = (routerAsync: RouterType) => {
  return async (req: Request, res: Response) => {
    const httpRequest: IHttpRequest = {
      //files: (req as any).files,
      body: req.body,
      query: req.query,
      params: req.params,
      loggedUser: req['user'] as UserAttributes,
      headers: {
        accessToken: req.get('accessToken'),
        refreshToken: req.get('refreshToken'),
        authorization: req.get('Authorization'),
      },
    };
    const router = await routerAsync();
    const httpResponse = await router.route(httpRequest);

    res.status(httpResponse.statusCode).json(httpResponse.body);
  };
};
