import { Request, Response, NextFunction } from 'express'
import asyncHandler from 'express-async-handler'

export const deleteWalletDetails = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    // sending status code
    res.status(200)

    // sending status message
    res.json({ message: 'deleteWalletDetails' })
  }
)
