import type { Request, Response } from 'express';
import { jobServices } from '@/services';

export const createJob = async (req: Request, res: Response) => {
  const newJob = await jobServices.createJob(req.body);
  res.status(201).json(newJob.toJSON());
};
