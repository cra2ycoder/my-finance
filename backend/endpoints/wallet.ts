import express from 'express'
import {
  getWalletDetails,
  createWalletDetails,
  updateWalletDetails,
  deleteWalletDetails,
} from '../controllers/wallet'

/**
 * @note
 * Router object creation
 */
const ExpressRouter = express.Router()

/**
 * @note
 * all routes declarations
 */
ExpressRouter.route('/').get(getWalletDetails).post(createWalletDetails)
ExpressRouter.route('/:id').put(updateWalletDetails).delete(deleteWalletDetails)

module.exports = ExpressRouter
