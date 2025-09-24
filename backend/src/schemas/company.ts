import { z } from 'zod';
import { DateMixinSchema, IdMixinSchema } from '@/schemas/mixin';

export const CompanySchema = z.object({
  ...IdMixinSchema,
  ...DateMixinSchema,
  name: z.string(),
  description: z.string(),
  logo: z.string().optional(),
  website: z.string(),
  location: z.string(),
});

export const CreateCompanySchema = CompanySchema.pick({
  name: true,
  description: true,
  logo: true,
  website: true,
  location: true,
});

export const UpdateCompanySchema = z.object({
  name: z.string().optional(),
  description: z.string().optional(),
  logo: z.string().optional(),
  website: z.string().optional(),
  location: z.string().optional(),
});

export type Company = z.infer<typeof CompanySchema>;
export type CreateCompany = z.infer<typeof CreateCompanySchema>;
export type UpdateCompany = z.infer<typeof UpdateCompanySchema>;
