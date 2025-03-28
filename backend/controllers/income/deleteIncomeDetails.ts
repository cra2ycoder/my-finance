import { Request, Response, NextFunction } from 'express'
import asyncHandler from 'express-async-handler'

export const deleteIncomeDetails = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.status(200)

    res.json({
      message: 'deleteIncomeDetails',
    })
  }
)
