import { JobModel } from '@/models';
import type { CreateJob } from '@/schemas';

export const createJob = async (jobPayload: CreateJob) => {
  const newJob = await JobModel.create(jobPayload);
  return newJob;
};

export const getAllJobs = async (id: string) => {
  const allJobs = await JobModel.find({ company: id });
  return allJobs;
};
