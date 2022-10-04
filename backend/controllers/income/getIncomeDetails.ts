import { Request, Response, NextFunction } from 'express'
import asyncHandler from 'express-async-handler'
import mongoose from 'mongoose'
// import { IncomeModel } from './schema/income'

export const getIncomeDetails = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const IncomeModel = mongoose.models.Income
    const data = await IncomeModel.find({})
    res.status(200).json(data)
  }
)
