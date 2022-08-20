import { Request, Response, NextFunction } from 'express'
import asyncHandler from 'express-async-handler'

export const getWalletDetails = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    // sending status code
    res.status(200)

    // sending status message
    res.json({
      wallet: {
        cash: 0,
        on: '21/08/2022',
      },
      banks: {
        total: 10000,
        accounts: [
          {
            bankName: 'Axis',
            accountType: 'savings',
            amount: {
              total: 97000,
              spent: 43000,
              balance: 54000,
            },
            currency: 'IND',
            on: '21/08/2022',
          },
          {
            bankName: 'PayTM',
            accountType: 'savings',
            amount: {
              total: 250,
              spent: 0,
              balance: 250,
            },
            currency: 'IND',
            on: '21/08/2022',
          },
        ],
      },
      salary: [
        {
          company: 'infosys',
          amount: 97614,
          currency: 'IND',
          creditDate: '30/08/2022',
          bonus: {
            amount: 89120,
            creditDate: '01/09/2022',
          },
          arrears: {
            amount: 14000,
            creditDate: '02/02/2022',
          },
        },
      ],
      dividends: {
        banks: [
          {
            bankName: 'axis',
            amount: 1000,
            currency: 'IND',
            on: '20/08/2022',
          },
        ],
        stocks: [
          {
            stockName: 'infy',
            value: 355000,
            amount: 2000,
            currency: 'IND',
            on: '20/08/2022',
          },
          {
            stockName: 'dsp',
            value: 150000,
            amount: 2000,
            currency: 'IND',
            on: '20/08/2022',
          },
        ],
        mutualfunds: [
          {
            fundName: 'ABSL',
            value: 355000,
            amount: 2000,
            currency: 'IND',
            on: '20/08/2022',
          },
          {
            fundName: 'HDFC',
            value: 355000,
            amount: 2000,
            currency: 'IND',
            on: '20/08/2022',
          },
        ],
        crypto: [
          {
            cryptoName: 'bitcoin',
            value: 355000,
            amount: 2000,
            currency: 'IND',
            on: '20/08/2022',
          },
          {
            cryptoName: 'etheirum',
            value: 355000,
            amount: 2000,
            currency: 'IND',
            on: '20/08/2022',
          },
        ],
        fd: [
          {
            bankName: 'axis',
            value: 355000,
            amount: 1000,
            currency: 'IND',
            on: '20/08/2022',
          },
        ],
        pf: [
          {
            bankName: 'pf',
            value: 355000,
            amount: 1000,
            currency: 'IND',
            on: '20/08/2022',
          },
        ],
      },
      refunds: {
        gas: {},
        gpay: {},
        tax: {},
        fuel: {},
        ecommerceApp: {},
      },
      redemptions: {
        stocks: {},
        mutualfunds: {},
        pf: {},
      },
      otherIncome: {
        family: [
          {
            name: 'wife',
            amount: 3000,
            givenDate: '11/02/2022',
          },
        ],
        myCredits: [
          {
            name: 'guna',
            amount: {
              borrowed: 5000,
              paid: 0,
              balance: 5000,
            },
            borrowedDate: '12/02/2022',
            lastPaidDate: '12/02/2022',
          },
        ],
        otherCredits: [
          {
            name: 'guna',
            amount: {
              borrowed: 5000,
              paid: 0,
              balance: 5000,
            },
            borrowedDate: '12/02/2022',
            lastPaidDate: '12/02/2022',
          },
        ],
      },
    })
  }
)
