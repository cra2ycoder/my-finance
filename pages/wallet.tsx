import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import WalletTable from '@components/WalletTable'
import { walletItems } from '@model/config/data'
import YearPicker from '@components/YearPicker'

function Wallet() {
  return (
    <>
      <Box className="wallet-table-info">
        <Typography
          sx={{
            fontSize: '1.5rem',
            width: '100%',
            fontWeight: 600,
            color: 'rgb(19, 47, 76)',
          }}
        >
          <span>Available: </span>
          <span>Rs. 1,400.00</span>
        </Typography>
        <Typography
          sx={{
            fontSize: '1.5rem',
            width: '100%',
            fontWeight: 600,
            color: '#0179f3',
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
