import { z } from 'zod';
import mongoose from 'mongoose';
import { DateMixinSchema, IdMixinSchema } from '@/schemas/mixin';
import { EmploymentType, WorkPlaceType, JobStatus } from '@/types';

export const JobSchema = z.object({
  ...IdMixinSchema,
  ...DateMixinSchema,
  title: z.string(),
  jobDescription: z.string(),
  openingDate: z.date(),
  applicationDeadline: z.date(),
  department: z.string(),
  location: z.string(),
  company: z.string().refine((val) => mongoose.Types.ObjectId.isValid(val), {
    message: 'Invalid ObjectId',
  }),
  employmentType: z.enum(EmploymentType),
  workPlaceType: z.enum(WorkPlaceType),
  compensation: z.string(),
  skills: z.array(z.string()).min(1, 'At least one skill is required'),
  vacancy: z.number().int().positive(),
  tags: z.array(z.string()).min(1, 'At least one tag is required'),
  status: z.enum(JobStatus),
  deletedAt: z.date().nullable().default(null),
});

export const CreateJobSchema = JobSchema.pick({
  title: true,
  jobDescription: true,
  openingDate: true,
  applicationDeadline: true,
  department: true,
  location: true,
  company: true,
  employmentType: true,
  workPlaceType: true,
  compensation: true,
  skills: true,
  vacancy: true,
  tags: true,
  status: true,
});

export type Job = z.infer<typeof JobSchema>;
export type CreateJob = z.infer<typeof CreateJobSchema>;
