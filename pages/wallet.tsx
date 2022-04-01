import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import WalletTable from '@components/WalletTable'
import PageTitle from '@components/PageTitle'
import { walletItems, pageItems } from '@model/config'

function Wallet() {
  return (
    <Box width="100%">
      <PageTitle {...pageItems.wallet}>
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
      </PageTitle>
      <WalletTable list={walletItems} />
    </Box>
  )
}

export default Wallet
