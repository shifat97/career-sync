import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import z from 'zod';

export const errorHandler = (
  error: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction,
): void => {
  // Zod
  if (error instanceof z.ZodError) {
    res.status(400).json({
      status: 'error',
      message: JSON.parse(error.message) || 'Validation Error',
    });
    return;
  }

  // Mongoose
  if (error instanceof mongoose.Error.ValidationError) {
    res.status(400).json({
      status: 'error',
      message: error.message || 'Validation Error',
    });
    return;
  }

  const err = error as { message?: string; status?: number };
  res.status(err.status || 500).json({
    status: 'error',
    message: err.message || 'Internal Server Error',
  });
};
