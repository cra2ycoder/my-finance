import { Request, Response, NextFunction } from 'express'
import asyncHandler from 'express-async-handler'
import mongoose from 'mongoose'
import connectMongoDB from '../../mongodb'
import { IncomeSchema } from './schema/income'

export const createIncomeDetails = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    await connectMongoDB()

    const curDate = new Date()
    const curYear = curDate.getFullYear()
    const curMonth = curDate.getMonth()

    const originalURL = req.originalUrl
    const urlObj = new URL(`https://mohaa.com${originalURL}`)
    const searchParams = urlObj?.searchParams
    const incomeMonth = searchParams.get('month') || curMonth
    const incomeYear = searchParams.get('year') || curYear

    const IncomeModel =
      mongoose.models.Income ||
      mongoose.model('Income', IncomeSchema, incomeYear.toString())

    const Wallet = await IncomeModel.create({
      month: incomeMonth,
      data: req.body,
    })

    res.status(201).json({ success: true, data: Wallet })
  }
)
