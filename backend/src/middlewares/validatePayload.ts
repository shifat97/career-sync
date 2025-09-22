import { Request, Response, NextFunction } from 'express';
import { ZodType } from 'zod';

export const validatePayload = (schema: ZodType) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
      throw result.error;
    }

    req.body = result.data;
    next();
  };
};
