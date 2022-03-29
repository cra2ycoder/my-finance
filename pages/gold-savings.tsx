import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import WalletTable from '@components/WalletTable'
import { goldItems } from '@model/config/data'

function Golds() {
  return (
    <Box>
      <Container sx={{ margin: 'auto' }}>
        <Box display="flex" justifyContent="space-between">
          <Typography
            sx={{
              color: '#235ad1',
              fontSize: '2.5vh',
              fontWeight: 100,
              margin: '2rem 0',
            }}
          >
            <span>Available Grams: </span>
            <span>2000</span>
          </Typography>
          <Typography
            sx={{
              color: '#235ad1',
              fontSize: '2.5vh',
              fontWeight: 100,
              margin: '2rem 0',
            }}
          >
            <span>Total Value: </span>
            <span>Rs. 10,00,400.00</span>
          </Typography>
        </Box>
        <WalletTable list={goldItems} />
      </Container>
    </Box>
  )
}

export default Golds
