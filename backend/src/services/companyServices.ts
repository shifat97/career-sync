import { CompanyModel } from '@/models';
import type { Company, CreateCompany } from '@/schemas';
import type { PaginatedResponse } from '@/types';

export const createCompany = async (companyPayload: CreateCompany) => {
  const newCompany = await CompanyModel.create(companyPayload);
  return newCompany;
};

export const getCompanies = async ({
  page = 0,
  limit = 10,
}: {
  page: number;
  limit: number;
}): Promise<PaginatedResponse<Company>> => {
  const [companies, total] = await Promise.all([
    CompanyModel.find()
      .skip(page * limit)
      .limit(limit)
      .lean()
      .exec(),
    CompanyModel.countDocuments().exec(),
  ]);

  return {
    items: companies,
    total,
    page,
    limit,
  };
};

export const updateCompanyByID = async (
  _id: string,
  newData: CreateCompany,
) => {
  const createUpdatedCompany = await CompanyModel.findOneAndReplace(
    { _id: _id },
    newData,
    {
      new: true,
      upsert: true,
    },
  );

  return createUpdatedCompany;
};
