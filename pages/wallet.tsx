import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import WalletTable from '@components/WalletTable'
import { walletItems } from '@model/config/data'

function Wallet() {
  return (
    <Box width="100%">
      <Typography
        sx={{
          fontSize: '2rem',
          width: '100%',
          fontWeight: 600,
          color: '#0179f3',
          textAlign: 'right',
          marginBottom: '1rem',
        }}
      >
        <span>Total: </span>
        <span>Rs. 1,23,400.00</span>
      </Typography>
      <WalletTable list={walletItems} />
    </Box>
  )
}

export default Wallet
