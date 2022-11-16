import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';

import {
  categoryRoutes,
  userRoutes,
  categoryGroupRoutes,
} from '../controllers';

export const integrateRoutes = (router: Router) => {
  router.use('/', userRoutes);
  router.use('/', categoryGroupRoutes);
  router.use('/', categoryRoutes);

  router.get('/health', (req, res) => {
    res.status(200).send({ apiStatus: 'API is up and running' });
  });

  //invalid routes
  router.use((req, res) => {
    res.status(StatusCodes.NOT_FOUND).json({
      error: 'Invalid route',
      message: 'You are trying to invoke an invalid api',
    });
  });
};
