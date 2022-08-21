import express from 'express'
import {
  getIncomeDetails,
  createIncomeDetails,
  updateIncomeDetails,
  deleteIncomeDetails,
} from '../controllers/income'

const ExpressRouter = express.Router()

ExpressRouter.route('/').get(getIncomeDetails).post(createIncomeDetails)
ExpressRouter.route('/:id').put(updateIncomeDetails).delete(deleteIncomeDetails)

module.exports = ExpressRouter
