import type { Express } from 'express';

import companyRouter from './companyRouter';
import jobRouter from './jobRouter';

export default function configureRoutes(app: Express) {
  app.use('/api/v1/companies', companyRouter);
  app.use('/api/v1/companies', jobRouter);
}
