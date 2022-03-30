import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import WalletTable from '@components/WalletTable'
import { walletItems } from '@model/config/data'
import YearPicker from '@components/YearPicker'

function Wallet() {
  return (
    <>
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="space-between"
        sx={{ borderBottom: '1px solid #7b1ea2', paddingBottom: '2rem' }}
      >
        <Typography
          sx={{
            color: '#235ad1',
            fontSize: '2.5vh',
          }}
        >
          <span>Available: </span>
          <span>Rs. 1,400.00</span>
        </Typography>
        <Typography
          sx={{
            color: '#235ad1',
            fontSize: '2.5vh',
          }}
        >
          <span>Total Income: </span>
          <span>Rs. 1,23,400.00</span>
        </Typography>
        <YearPicker />
      </Box>
      <WalletTable list={walletItems} />
    </>
  )
}

export default Wallet
