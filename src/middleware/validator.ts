// external packages
import { Request, Response, NextFunction } from 'express';

// joi validator
import validators from '../validator';

const commonValidator = (input: Object) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const data = Object.assign(req.body, req.params, req.query)
    validators(input, data, (err: any) => {
      if (err) {
        res.status(422).send({ status: 422, message: (err.details || []).map((ele: any) => (ele.message || '')).join(', '), errors: err.details })
      } else {
        next()
      }
    })
  }
}

export { commonValidator }