/* eslint-disable no-unused-vars */
// external packages
import { Request, Response, NextFunction } from 'express'

const notFoundHandler = (req: Request, res: Response, next: NextFunction) => {
  res.status(404).send({ status: 404, message: 'Resource not found' });
}

export { notFoundHandler }