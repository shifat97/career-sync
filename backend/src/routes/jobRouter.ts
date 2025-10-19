import { Router } from 'express';
import { jobController } from '@/controllers';
import { validatePayload } from '@/middlewares/validatePayload';
import {
  CreateJobSchema,
  UpdateJobSchema,
  UpdateJobStatusSchema,
} from '@/schemas';

const router = Router();

router.post(
  '/:companyId/jobs',
  validatePayload(CreateJobSchema),
  jobController.createJob,
);
router.get('/:companyId/jobs', jobController.getAllJobs);
router.get('/:companyId/jobs/:jobId', jobController.getJob);
router.put(
  '/:companyId/jobs/:jobId',
  validatePayload(UpdateJobSchema),
  jobController.updateJob,
);
router.patch(
  '/:companyId/jobs/:jobId/change-status',
  validatePayload(UpdateJobStatusSchema),
  jobController.updatePublishStatus,
);

export default router;
