import express from 'express'
import {
  getDebitDetails,
  createDebitDetails,
  updateDebitDetails,
  deleteDebitDetails,
} from '../controllers/debits'

/**
 * @note
 * Router object creation
 */
const ExpressRouter = express.Router()

/**
 * @note
 * all routes declarations
 */
ExpressRouter.route('/').get(getDebitDetails).post(createDebitDetails)
ExpressRouter.route('/:id').put(updateDebitDetails).delete(deleteDebitDetails)

module.exports = ExpressRouter
