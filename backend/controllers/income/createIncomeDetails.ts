import mongoose from 'mongoose'
import asyncHandler from 'express-async-handler'
import { Request, Response, NextFunction } from 'express'
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
    const incomeMonth = searchParams.get('month') || curMonth + 1
    const incomeYear = searchParams.get('year') || curYear

    const IncomeModel =
      mongoose.models.Income ||
      mongoose.model('Income', IncomeSchema, incomeYear.toString())

    mongoose.connection.db
      .listCollections({ name: incomeYear.toString() })
      .next(async (err, collInfo) => {
        if (collInfo === null) {
          const Wallet = await IncomeModel.create({
            month: incomeMonth,
            ...req.body,
          })
          res.status(201).json({
            success: true,
            message: 'successfully created',
            accounts: Wallet?.accounts || [],
          })
        } else {
          res.status(403).json({
            error: `${incomeYear} collection is already exists! use PUT method to update!`,
          })
        }
      })
  }
)
