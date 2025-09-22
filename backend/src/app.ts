import express from 'express';
import cors from 'cors';
import pinoHttp from 'pino-http';

import connectDB from '@/db';
import { envConfig } from '@/configs';
import logger from '@/configs/logger';
import configureRoutes from './routes';
import { errorHandler } from '@/middlewares/index';

const app = express();
app.use(pinoHttp({ logger }));

connectDB();

app.use(express.json());
app.use(
  cors({
    origin: envConfig.ALLOWED_ORIGIN,
  }),
);

app.get('/health', (_req, res) => {
  res.status(200).json({ message: 'OK' });
});

configureRoutes(app);
app.use(errorHandler);

app.listen(envConfig.PORT, () => {
  logger.info(`Server is running on port ${envConfig.PORT}`);
});
