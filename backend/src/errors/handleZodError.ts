import { ZodError, ZodIssue } from 'zod';
import { IErrorMessage } from '../types/errors.types';

const handleZodError = (error: ZodError) => {
  const errorMessages: IErrorMessage[] = error.issues.map((el: ZodIssue) => {
    return {
      path: el.path[el.path.length - 1] as string | number,
      message: el.message,
    };
  });

  const statusCode = 400;
  return {
    statusCode,
    message: 'Validation Error',
    errorMessages,
  };
};

export default handleZodError;
