import { TIncomeModel } from './typings'

const incomeModel: TIncomeModel = {
  wallet: {
    total: 0,
    on: '21/08/2022',
  },
  accounts: {
    grandBalance: {
      banks: 100000,
      upi: 120,
      mutualFunds: 200000,
      stocks: 20000,
      crypto: 15000,
    },
    banks: [
      {
        name: 'Axis Bank',
        currency: 'INR',
        accountType: 'savings',
        currentBalance: 1021221,
        previousBalance: {
          balance: 12000,
          date: '28/09/2022',
        },
        transactions: [
          {
            from: 'infosys',
            as: 'salary',
            currency: 'INR',
            type: 'credit',
            totalAmount: 197614,
            date: '30/08/2022',
          },
          {
            from: 'infosys',
            as: 'bonus',
            currency: 'INR',
            type: 'credit',
            totalAmount: 89120,
            date: '01/09/2022',
          },
          {
            from: 'infosys',
            as: 'arrears',
            currency: 'INR',
            type: 'credit',
            totalAmount: 50000,
            date: '02/09/2022',
          },
        ],
      },
    ],
    upi: [
      {
        name: 'PayTM',
        currency: 'INR',
        currentBalance: 120,
        previousBalance: {
          balance: 120,
          date: '28/09/2022',
        },
        transactions: [],
      },
    ],
    mutualFunds: [
      {
        name: 'ABSL',
        currency: 'INR',
        accountType: 'mutual fund',
        currentBalance: 355000,
        previousBalance: {
          balance: 352000,
          date: '28/09/2022',
        },
        investedOn: '',
        brokerage: {
          name: 'Mohan Kumar',
        },
        sip: {
          amount: 2000,
          frequency: 'monthly',
          status: 'active',
          debitOn: '10th of every month',
        },
        transactions: [
          {
            for: 'personal',
            as: 'redemption',
            currency: 'INR',
            type: 'debit',
            totalAmount: 100000,
            date: '30/08/2022',
          },
        ],
      },
    ],
    stocks: [],
    crypto: [],
  },
}

export default incomeModel
