import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import WalletTable from '@components/WalletTable'

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

function Wallet() {
  return (
    <Box>
      <Container sx={{ margin: 'auto', marginTop: '3rem' }}>
        <Typography
          sx={{ color: '#235ad1', fontSize: '3.5vh', fontWeight: 100 }}
        >
          Available: Rs. 1,400.00 | Total Income: Rs. 1,23,400.00
        </Typography>
        <WalletTable list={walletItems} />
      </Container>
    </Box>
  )
}

export default Wallet
