import { Router } from 'express';
import { companyController } from '@/controllers';
import { validatePayload } from '@/middlewares/validatePayload';
import { CreateCompanySchema } from '@/schemas';

const router = Router();

router.post(
  '/',
  validatePayload(CreateCompanySchema),
  companyController.createCompany,
);
router.get('/', companyController.getCompanies);
router.put('/:_id', companyController.updateCompanyByID);

export default router;
