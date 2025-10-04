import type { Request, Response } from 'express';
import { jobServices } from '@/services';

export const createJob = async (req: Request, res: Response) => {
  const newJob = await jobServices.createJob(req.body);
  res.status(201).json(newJob.toJSON());
};

export const getAllJobs = async (req: Request, res: Response) => {
  const { companyId } = req.params;
  const allJobs = await jobServices.getAllJobs(companyId);

  res.status(200).json({
    data: allJobs.filter((jobs) => jobs.deletedAt === null),
    status: 'success',
  });
};
