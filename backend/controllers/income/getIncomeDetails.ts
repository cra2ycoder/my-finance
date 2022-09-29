import { Request, Response, NextFunction } from 'express'
import asyncHandler from 'express-async-handler'
import { IncomeModel } from './schema/income'

export const getIncomeDetails = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.status(200)
    const data = await IncomeModel.find()
    res.json(data)
  }
)
