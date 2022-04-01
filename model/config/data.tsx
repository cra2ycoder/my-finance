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
  debits: {
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

const debitList = [
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
  {
    title: 'Axis Focused Fund 25 (SIP)',
    desc: 'mutual funds',
    type: 'savings',
    value: 1500,
    on: 'every-month-10',
  },
  {
    title: 'SBI Bluechip (SIP)',
    desc: 'mutual funds',
    type: 'savings',
    value: 2500,
    on: 'every-month-10',
  },
  {
    title: 'Reliance Liquid Fund (SIP)',
    desc: 'mutual funds',
    type: 'savings',
    value: 500,
    on: 'every-month-10',
  },
  {
    title: 'L&T (SIP)',
    desc: 'mutual funds',
    type: 'savings',
    value: 5000,
    on: 'every-month-15',
  },
  {
    title: 'ABSL Equity Fund - Growth (SIP)',
    desc: 'mutual funds',
    type: 'savings',
    value: 2500,
    on: 'every-month-15',
  },
  {
    title: 'ABSL Equity Hybrid 95 Fund - Growth (SIP)',
    desc: 'mutual funds',
    type: 'savings',
    value: 2500,
    on: 'every-month-15',
  },
  {
    title: 'HDFC Growth (SIP)',
    desc: 'mutual funds',
    type: 'savings',
    value: 5000,
    on: 'every-month-15',
  },
  {
    title: 'HDFC Presudant Balanced Fund (SIP)',
    desc: 'mutual funds',
    type: 'savings',
    value: 2000,
    on: 'every-month-15',
  },
  {
    title: 'Reliance Small Cap (SIP)',
    desc: 'mutual funds',
    type: 'savings',
    value: 5000,
    on: 'every-month-18',
  },
  {
    title: 'ICICI Preduntial Multi Asset Fund (SIP)',
    desc: 'mutual funds',
    type: 'savings',
    value: 1000,
    on: 'every-month-25',
  },
]

export { walletItems, months, goldItems, pageItems, debitList }
