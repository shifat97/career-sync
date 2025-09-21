import { companyServices } from '@/services';
import type { Request, Response } from 'express';

export const createCompany = async (req: Request, res: Response) => {
  try {
    const newCompany = await companyServices.createCompany(req.body);
    res.status(201).json(newCompany.toJSON());
  } catch (error) {
    if (error instanceof Error && 'code' in error && error.code === 11000) {
      res.status(409).json({
        success: false,
        message: 'A company with that name already exists.',
      });
    } else {
      res.status(500).json({
        success: false,
        message: 'An unexpected error occurred.',
        error,
      });
    }
  }
};

export const getCompanies = async (req: Request, res: Response) => {
  const page = parseInt(req.query.page as string) || 0;
  const limit = parseInt(req.query.limit as string) || 10;
  const result = await companyServices.getCompanies({ page, limit });
  res.status(200).json(result);
};
