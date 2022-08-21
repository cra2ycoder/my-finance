import { Request, Response, NextFunction } from 'express'
import asyncHandler from 'express-async-handler'

export const getIncomeDetails = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.status(200)

    res.json({
      wallet: {
        total: 0,
        on: '21/08/2022',
      },
      accounts: {
        total: 10000,
        banks: [
          {
            bankName: 'Axis Bank',
            currency: 'IND',
            accountType: 'savings',
            isSalaryAccount: true,
            lastBalance: 12000,
            lastBalanceDate: '21/08/2022',
            totalDividends: 1000,
            totalSalary: 1021221,
            salary: [
              {
                company: 'infosys',
                currency: 'IND',
                total: 197614,
                amount: 97614,
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
            dividends: [
              {
                amount: 1000,
                on: '20/08/2022',
              },
            ],
          },
          {
            bankName: 'PayTM',
            currency: 'IND',
            accountType: 'savings',
            isSalaryAccount: false,
            lastBalance: 120,
            lastBalanceDate: '21/08/2022',
            totalDividends: 0,
            totalSalary: 0,
            salary: [],
            dividends: [
              {
                amount: 1000,
                on: '20/08/2022',
              },
            ],
          },
        ],
        mutualfunds: [
          {
            fundName: 'ABSL',
            value: 355000,
            amount: 2000,
            fundType: 'dividend',
            hasBrokerage: true,
            currency: 'IND',
            investedOn: '',
            hasSIP: true,
            sipAmount: 2000,
            status: 'active',
            redemption: [
              {
                amount: 100000,
                on: '09/09/2022',
              },
            ],
            dividends: {
              amount: 100000,
              on: '09/09/2022',
            },
          },
        ],
        stocks: [],
        crypto: [],
        family: [
          {
            name: 'rajeee',
            relationship: 'wife',
            amount: 3000,
            transferBy: 'gpay',
            transferredDate: '11/02/2022',
          },
        ],
        myCredits: [
          {
            personName: 'guna',
            reasons: '',
            amount: {
              borrowed: 5000,
              paid: 0,
              balance: 5000,
            },
            borrowedOn: '12/02/2022',
            dueDate: '01/09/2022',
            paidList: [
              {
                on: '20/09/2022',
                amount: 1000,
              },
            ],
          },
        ],
        othersCredits: [
          {
            personName: 'guna',
            amount: {
              borrowed: 5000,
              paid: 0,
              balance: 5000,
            },
            borrowedOn: '12/02/2022',
            dueDate: '01/09/2022',
            paidList: [
              {
                on: '20/09/2022',
                amount: 1000,
              },
            ],
          },
        ],
        loans: [
          {
            bankName: 'HDFC',
            loanType: 'Plot',
            interestRate: '8.5',
            monthlyEMI: 18718,
            reasons: '',
            amount: {
              borrowed: 1560000,
              paid: 55000,
              balance: 5000,
            },
            borrowedOn: '12/02/2022',
            emiDueDate: '01/09/2022',
            tenureYears: 10,
            paidList: [
              {
                on: '20/09/2022',
                amount: 1000,
              },
            ],
          },
        ],
        refunds: {
          total: 1000,
          accounts: {
            gas: [
              {
                amount: 1000,
                currency: 'IND',
                on: '20/08/2022',
              },
            ],
            gpay: [
              {
                amount: 3,
                currency: 'IND',
                on: '20/08/2022',
              },
              {
                amount: 5,
                currency: 'IND',
                on: '22/08/2022',
              },
            ],
            tax: [
              {
                amount: 35000,
                currency: 'IND',
                on: '20/08/2022',
              },
            ],
            fuel: [
              {
                amount: 6,
                currency: 'IND',
                on: '20/08/2022',
              },
            ],
            ecommerceApp: [
              {
                appName: 'flipkart',
                amount: 6,
                currency: 'IND',
                on: '20/08/2022',
              },
            ],
          },
        },
      },
    })
  }
)
