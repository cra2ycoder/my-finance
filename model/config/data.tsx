import AccountBalanceIcon from '@mui/icons-material/AccountBalance'
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange'
import DiamondIcon from '@mui/icons-material/Diamond'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet'
import FlagIcon from '@mui/icons-material/Flag'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive'

const pageItems = {
  home: {
    title: '',
    desc: '',
  },
  golds: {
    title: 'Golds',
    desc: 'Save Gold. Save Family. Save Future.',
  },
  dashboard: {
    title: 'Dashboard',
    desc: 'Financial Management(s). ',
  },
  wallet: {
    title: 'Wallet',
    desc: 'Total income details. Earn, Save and Spend.',
  },
  notifications: {
    title: 'Notifications',
    desc: 'Keep watching. Be Alert. Ensure everything.',
  },
  monthlyexpenses: {
    title: 'Monthly Expenses',
    desc: 'Daily spends, commitments, unplanned, pending...',
  },
}

const walletItems = [
  { name: 'Savings A/C Balance', value: 0, info: 'before salary credit' },
  {
    name: 'Salary',
    value: 0,
    groups: [
      { name: 'Take Home', value: 0 },
      { name: 'Bonus', value: 0 },
      { name: 'Arrears', value: 0 },
    ],
  },
  {
    name: 'Returns',
    value: 0,
    groups: [
      { name: 'MF Returns: HDFC (4.58L)', value: 0 },
      { name: 'MF Returns: ABSL (6.69L)', value: 0 },
      { name: 'MF Returns: ABSL (1L)', value: 0 },
      { name: 'MF Returns: ICICI (1.29L)', value: 0 },
      { name: 'MF Returns: DSP (1.5L)', value: 0 },
      { name: 'Infy Returns', value: 0 },
      { name: 'Tax Returns', value: 0 },
    ],
  },
  {
    name: 'Interests Received',
    value: 0,
    groups: [
      { name: 'FD Interest', value: 0 },
      { name: 'Bank Interests', value: 0 },
      { name: 'Cashback', value: 0 },
      { name: 'PF Interest', value: 0 },
    ],
  },
  {
    name: 'Redemption',
    value: 0,
    groups: [
      { name: 'Axis Direct Redemption', value: 0 },
      { name: 'MF Redemption', value: 0 },
      { name: 'Bitcoin Redemption', value: 0 },
      { name: 'Stocks Redemption', value: 0 },
    ],
  },
  {
    name: 'As Cash in personal wallet',
    value: 0,
  },
  {
    name: 'Other Income',
    value: 0,
    info: 'before salary credit',
    groups: [{ name: 'XXXX', value: 0 }],
  },
  {
    name: 'Personal Loans',
    value: 0,
    groups: [{ name: 'XXXX', value: 0 }],
  },
  {
    name: 'Loan credits',
    value: 0,
    groups: [{ name: 'XXXX', value: 0 }],
  },
]

const dashboardItems = [
  {
    name: 'Monthly Expenses',
    desc: 'commitments/unplanned/savings',
    icon: (
      <AccountBalanceWalletIcon
        sx={{ width: 50, height: 50, fill: '#707b8b' }}
      />
    ),
    link: '/monthly-expenses',
  },
  {
    name: 'Investments',
    desc: 'Overall mutual Stocks/MFs',
    icon: (
      <CurrencyExchangeIcon sx={{ width: 50, height: 50, fill: '#707b8b' }} />
    ),
    link: '/investments',
  },
  {
    name: 'Gold Savings',
    desc: 'Total golds/gold chit',
    icon: <DiamondIcon sx={{ width: 50, height: 50, fill: '#707b8b' }} />,
    link: '/gold-savings',
  },
  {
    name: 'Loans',
    desc: 'Personal/Plot/Home/Gold loans and EMIs',
    icon: (
      <AccountBalanceIcon sx={{ width: 50, height: 50, fill: '#707b8b' }} />
    ),
    link: '/loans',
  },
  {
    name: 'Goals',
    desc: 'Current year goal!',
    icon: <FlagIcon sx={{ width: 50, height: 50, fill: '#707b8b' }} />,
    link: '/goals',
  },
  {
    name: 'Notifications',
    desc: 'Upcoming...',
    icon: (
      <NotificationsActiveIcon
        sx={{ width: 50, height: 50, fill: '#707b8b' }}
      />
    ),
    link: '/notifications',
  },
]

const months = [
  'JAN',
  'FEB',
  'MAR',
  'APR',
  'MAY',
  'JUN',
  'JUL',
  'AUG',
  'SEP',
  'OCT',
  'NOV',
  'DEC',
]

const goldItems = [
  {
    name: 'Gold Savings',
    value: 0,
    groups: [
      {
        name: 'Mens Chains',
        grams: 16,
        value: 0,
        belongsTo: 'mohaa',
        at: 'home',
      },
      {
        name: 'Necklace',
        grams: 42,
        value: 0,
        belongsTo: 'wife',
        at: 'bank',
      },
      {
        name: 'Simple thread chain',
        grams: 16,
        value: 0,
        belongsTo: 'jo',
        at: 'home',
      },
      {
        name: 'Bangles',
        grams: 16,
        value: 0,
        belongsTo: 'jo',
        at: 'home',
      },
    ],
  },
  {
    name: 'Gold Chits',
    value: 0,
    groups: [{ name: 'GRT Jewelers', value: 0, installment: 10000 }],
  },
]

const notificationList = [
  {
    title: 'Interest will be credited!',
    desc: 'HDFC mutual funds interest will be paid on or before 15th of this month. And, the expected amount is between Rs. 2000 - Rs. 4000',
    alertZone: 'red', // orange, green, yellow
    commitment: 'monthly',
    on: 'every-month-30',
    type: 'credit', // 'debit'
    category: 'loan', //sip, returns, redemption, interest
  },
  {
    title: 'Interest will be credited!',
    alertZone: 'red', // orange, green, yellow
    commitment: 'monthly',
    on: 'every-month-30',
    type: 'credit', // 'debit'
    category: 'loan', //sip, returns, redemption, interest
  },
  {
    title: 'Interest will be credited!',
    alertZone: 'red', // orange, green, yellow
    commitment: 'monthly',
    on: 'every-month-30',
    type: 'credit', // 'debit'
    category: 'loan', //sip, returns, redemption, interest
  },
  {
    title: 'Interest will be credited!',
    alertZone: 'red', // orange, green, yellow
    commitment: 'monthly',
    on: 'every-month-30',
    type: 'credit', // 'debit'
    category: 'loan', //sip, returns, redemption, interest
  },
]

const monthlySpentList = [
  {
    title: 'Home Allowance',
    desc: 'monthly amount that will be shared to home',
    type: 'commitment',
    value: 7000,
    on: 'every-month-1',
  },
  {
    title: 'Plot Loan (HDFC)',
    desc: 'plot loan for 10yrs',
    type: 'commitment',
    value: 9923,
    on: 'every-month-10',
  },
  {
    title: 'Plot Loan (HDFC)',
    desc: 'plot loan for 10yrs',
    type: 'commitment',
    value: 8235,
    on: 'every-month-10',
  },
  {
    title: 'Macbook Pro Loan (HDFC)',
    desc: 'laptop loan for 11months',
    type: 'commitment',
    value: 8333,
    on: 'every-month-10',
  },
  {
    title: 'Personal Expenses',
    desc: 'personal use',
    type: 'commitment',
    value: 3000,
    on: 'every-month-10',
  },
  {
    title: 'LIC Jeevan Arockya',
    desc: 'insurance for medical',
    type: 'commitment',
    value: 293,
    on: 'every-month-29',
  },
]

export {
  walletItems,
  dashboardItems,
  months,
  goldItems,
  pageItems,
  notificationList,
  monthlySpentList,
}
