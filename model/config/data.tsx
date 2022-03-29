import AccountBalanceIcon from '@mui/icons-material/AccountBalance'
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange'
import DiamondIcon from '@mui/icons-material/Diamond'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet'

const walletItems = [
  { title: 'A/C Balance (before salary credit)', value: 0 },
  { title: 'Salary (take home)', value: 0 },
  { title: 'Salary Bonus', value: 0 },
  {
    title: 'Returns',
    value: 0,
    groups: [
      { title: 'MF Returns: HDFC (4.58L)', value: 0 },
      { title: 'MF Returns: ABSL (6.69L)', value: 0 },
      { title: 'MF Returns: ABSL (1L)', value: 0 },
      { title: 'MF Returns: ICICI (1.29L)', value: 0 },
      { title: 'MF Returns: DSP (1.5L)', value: 0 },
      { title: 'Infy Returns', value: 0 },
      { title: 'Tax Returns', value: 0 },
    ],
  },
  {
    title: 'Interests Received',
    value: 0,
    groups: [
      { title: 'FD Interest', value: 0 },
      { title: 'Bank Interests (for our a/c balance maintanance)', value: 0 },
      { title: 'Cashback (Fuel)', value: 0 },
      { title: 'PF Interest', value: 0 },
    ],
  },
  {
    title: 'Redemption',
    value: 0,
    groups: [
      { title: 'Axis Direct Redemption', value: 0 },
      { title: 'MF Redemption', value: 0 },
      { title: 'Bitcoin Redemption', value: 0 },
      { title: 'Stocks Redemption', value: 0 },
    ],
  },
  {
    title: 'As Cash in personal wallet',
    value: 0,
  },
  {
    title:
      'Other Income (any amount that you received from your family members)',
    value: 0,
    groups: [{ title: 'XXXX', value: 0 }],
  },
  {
    title: 'Personal Loan from Friends/Family Members',
    value: 0,
    groups: [{ title: 'XXXX', value: 0 }],
  },
  {
    title: 'Loan paid back (your loan amount returned by the person(s))',
    value: 0,
    groups: [{ title: 'XXXX', value: 0 }],
  },
]

const dashboardItems = [
  {
    title: 'Monthly Expenses',
    desc: 'commitments/unplanned/savings/pending',
    icon: (
      <AccountBalanceWalletIcon
        sx={{ width: 50, height: 50, fill: '#707b8b' }}
      />
    ),
    link: '/monthly-expenses',
  },
  {
    title: 'Investments',
    desc: 'Overall mutual funds/stocks/returns/SIP',
    icon: (
      <CurrencyExchangeIcon sx={{ width: 50, height: 50, fill: '#707b8b' }} />
    ),
    link: '/investments',
  },
  {
    title: 'Gold Savings',
    desc: 'Total golds/gold chit',
    icon: <DiamondIcon sx={{ width: 50, height: 50, fill: '#707b8b' }} />,
    link: '/gold-savings',
  },
  {
    title: 'Loans',
    desc: 'Personal/Plot/Home/Gold loans and EMIs',
    icon: (
      <AccountBalanceIcon sx={{ width: 50, height: 50, fill: '#707b8b' }} />
    ),
    link: '/loans',
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

export { walletItems, dashboardItems, months }
