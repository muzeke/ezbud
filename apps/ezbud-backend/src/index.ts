import * as chalk from 'chalk';
import * as dotenv from 'dotenv';
import * as express from 'express';

import { mongoDbAtlas } from './app/database';
import { integrateRoutes } from './app/routes';

dotenv.config();
const app = express();

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

const port = process.env.PORT || 4031;
const router = express.Router({ mergeParams: true });

app.use('/api', router);
integrateRoutes(router);

//connect to mongoDbAtlas database
mongoDbAtlas().connect();

const server = app.listen(port, () => {
  console.log(`${chalk.green(`Listening at http://localhost:${port}/api`)}`);
});

server.on('error', console.error);
