import { isCelebrateError, CelebrateError } from 'celebrate';
import { BAD_REQUEST } from '../utils/constants/statusCode';
import { NextFunction, Response } from 'express';
import jsonResponse from '../helpers/json.response';

const joiErrors = () => (
  err: any,
  req: any,
  res: Response,
  next: NextFunction,
): any => {
  if (!isCelebrateError(err)) return next();
  const errors = err.details.get('body')?.details[0].message || [];
  const message = 'Bad Request';
  return jsonResponse({
    res,
    success:false,
    status: BAD_REQUEST,
    message:
       err ? errors : message,
  });
};

export default joiErrors;
