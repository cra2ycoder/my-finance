import { Request, Response, NextFunction } from 'express'
import asyncHandler from 'express-async-handler'

export const getWalletDetails = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    // sending status code
    res.status(200)

    // sending status message
    res.json({
      month: 'september',
      year: '2022',
      walletBalance: 1000,
      totalAmount: 160000,
      totalSpent: 87810,
      totalSavings: 40000,
      lastUpdatedDate: '',
    })
  }
)
