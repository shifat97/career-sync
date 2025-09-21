import { Request, Response, NextFunction } from 'express';
import { ZodError, ZodType } from 'zod';

export const validatePayload = (schema: ZodType) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
      const validationErrors: ZodError['issues'] = result.error.issues;

      const formattedErrors = validationErrors.map((issue) => ({
        path: issue.path.join('.'),
        message: issue.message,
      }));

      res.status(400).json({
        success: false,
        message: 'Data validation error',
        errors: formattedErrors,
      });
      return;
    }

    req.body = result.data;
    next();
  };
};
