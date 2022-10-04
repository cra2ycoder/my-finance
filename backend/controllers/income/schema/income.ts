import mongoose from 'mongoose'

const { Schema } = mongoose

export const BaseBalanceSchema = new Schema(
  {
    total: Number,
    on: String,
  },
  { _id: false }
)

export const GrandBalanceSchema = new Schema(
  {
    wallet: Number,
    banks: Number,
    upi: Number,
    mutualFunds: Number,
    stocks: Number,
    crypto: Number,
  },
  { _id: false }
)

export const TransactionSchema = new Schema(
  {
    from: String,
    as: String,
    currency: String,
    type: String,
    totalAmount: Number,
    date: String,
  },
  { _id: false }
)

export const SIPSchema = new Schema(
  {
    amount: Number,
    frequency: String,
    status: String,
    debitOn: String,
  },
  { _id: false }
)

export const BrokerageSchema = new Schema(
  {
    name: String,
  },
  { _id: false }
)

export const BaseAccountSchema = new Schema(
  {
    name: String,
    currency: String,
    accountType: String,
    currentBalance: Number,
    investedOn: String,
    previousBalance: BaseBalanceSchema,
    brokerage: BrokerageSchema,
    sip: SIPSchema,
    transactions: [TransactionSchema],
  },
  { _id: false }
)

export const AccountsSchema = new Schema(
  {
    grandBalance: GrandBalanceSchema,
    wallet: BaseAccountSchema,
    banks: [BaseAccountSchema],
    upi: [BaseAccountSchema],
    mutualFunds: [BaseAccountSchema],
    stocks: [BaseAccountSchema],
    crypto: [BaseAccountSchema],
  },
  { _id: false }
)

export const IncomeSchema = new Schema(
  {
    accounts: AccountsSchema,
  },
  { strict: false }
)
