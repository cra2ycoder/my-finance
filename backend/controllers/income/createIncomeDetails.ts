import { Request, Response, NextFunction } from 'express'
import asyncHandler from 'express-async-handler'
import mongoose from 'mongoose'
import connectMongoDB from '../../mongodb'
import { IncomeModel } from './schema/income'

export const createIncomeDetails = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    await connectMongoDB()

    /**
     * @todo
     * - store data based on the year and month
     *
     */

    // const originalURL = req.originalUrl
    // const urlObj = new URL(`https://mohaa.com${originalURL}`)
    // const searchParams = urlObj?.searchParams
    // const incomeMonth = searchParams.get('month')
    // const incomeYear = searchParams.get('year')

    // console.log({ originalURL, urlObj, incomeType })

    // const wallet = await IncomeModel.create({
    //   2022: {
    //     september: req.body,
    //   },
    // })

    const wallet = await IncomeModel.create(req.body)

    // console.log({ wallet, IncomeModel, body: req.body })
    res.status(201).json({ success: true, data: wallet })
  }
)
