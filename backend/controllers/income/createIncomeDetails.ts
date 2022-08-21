import { Request, Response, NextFunction } from 'express'
import asyncHandler from 'express-async-handler'

export const createIncomeDetails = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.status(200)

    res.json({ message: 'create a income details' })
  }
)
