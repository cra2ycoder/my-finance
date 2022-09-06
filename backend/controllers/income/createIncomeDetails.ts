import { Request, Response, NextFunction } from 'express'
import asyncHandler from 'express-async-handler'
import mongoose from 'mongoose'
import connectMongoDB from '../../mongodb'

const WalletSchema = new mongoose.Schema({
  total: {
    type: 'Number',
  },
  lastUpdatedDate: {
    type: 'String',
  },
})

const IncomeSchema = new mongoose.Schema({
  wallet: WalletSchema,
})

const IncomeModel =
  mongoose.models.Income || mongoose.model('Income', IncomeSchema)

export const createIncomeDetails = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    await connectMongoDB()

    const wallet = await IncomeModel.create(req.body)
    // console.log({ wallet, IncomeModel, body: req.body })
    res.status(201).json({ success: true, data: wallet })
  }
)
