import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import WalletTable from '@components/WalletTable'
import { walletItems } from '@model/config/data'
import YearPicker from '@components/YearPicker'

function Wallet() {
  return (
    <Box>
      <Container sx={{ margin: 'auto' }}>
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
              fontWeight: 100,
              margin: '2rem 0',
            }}
          >
            <span>Available: </span>
            <span>Rs. 1,400.00</span>
          </Typography>
          <Typography
            sx={{
              color: '#235ad1',
              fontSize: '2.5vh',
              fontWeight: 100,
              margin: '2rem 0',
            }}
          >
            <span>Total Income: </span>
            <span>Rs. 1,23,400.00</span>
          </Typography>
          <YearPicker />
        </Box>
        <WalletTable list={walletItems} />
      </Container>
    </Box>
  )
}

export default Wallet
