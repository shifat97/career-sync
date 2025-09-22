import { companyServices } from '@/services';
import type { Request, Response } from 'express';

export const createCompany = async (req: Request, res: Response) => {
  const newCompany = await companyServices.createCompany(req.body);
  res.status(201).json(newCompany.toJSON());
};

export const getCompanies = async (req: Request, res: Response) => {
  const page = parseInt(req.query.page as string) || 0;
  const limit = parseInt(req.query.limit as string) || 10;
  const result = await companyServices.getCompanies({ page, limit });
  res.status(200).json(result);
};

export const updateCompanyByID = async (req: Request, res: Response) => {
  try {
    const { _id } = req.params;
    const newData = req.body;

    const updateCompany = await companyServices.updateCompanyByID(_id, newData);

    if (!updateCompany) {
      res.status(404).json({ message: 'No company found wit this id' });
      return;
    }

    res.status(200).json({ message: 'Update successfully', newData: newData });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error: error });
  }
};
