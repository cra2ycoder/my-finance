export type TGrandBalance = {
  banks: number
  upi: number
  mutualFunds: number
  stocks: number
  crypto: number
}

export type TPreviousBalanceModel = {
  balance: number
  date: string
}

export type TTransactionAsType =
  | 'salary'
  | 'redemption'
  | 'bonus'
  | 'arrears'
  | 'dividend'
  | 'interests'
  | 'others'
export type TCurrencyType = 'INR' | 'USD'
export type TTransactionType = 'credit' | 'debit'
export type TStockType = 'NSE' | 'BSE'
export type TStockRegionType = 'IND' | 'USA'
export type TSIPFrequencyType = 'monthly' | 'weekly' | 'daily'
export type TSIPStatus = 'active' | 'inactive'

export type TBaseTransactionModel = {
  from?: string
  for?: string
  as: TTransactionAsType
  currency: TCurrencyType
  type: TTransactionType
  totalAmount: number
  date: string
}

export type TBaseAccountModel = {
  name: string
  currency: string
  currentBalance: number
  accountType?: string
  previousBalance?: TPreviousBalanceModel
  transactions?: TBaseTransactionModel[]
}

export type TBrokerageBaseModel = {
  name: string
}

export type TSIPBaseModel = {
  amount: number
  frequency: TSIPFrequencyType
  status: TSIPStatus
  debitOn: string
}

export type TMutualFundBaseAccountModel = TBaseAccountModel & {
  investedOn: string
  brokerage: TBrokerageBaseModel
  sip: TSIPBaseModel
}

export type TStockBaseAccountModel = TMutualFundBaseAccountModel & {
  stockType: TStockType
  stockRegion: TStockRegionType
}

export type TCryptoBaseAccountModel = TMutualFundBaseAccountModel

export type TAccountsModel = {
  grandBalance: TGrandBalance
  banks: TBaseAccountModel[]
  mutualFunds?: TMutualFundBaseAccountModel[]
  upi?: TBaseAccountModel[]
  stocks?: TStockBaseAccountModel[]
  crypto?: TCryptoBaseAccountModel[]
}

export type TWalletModel = {
  total: number
  on: string
}

export type TIncomeModel = {
  wallet: TWalletModel
  accounts: TAccountsModel
}
