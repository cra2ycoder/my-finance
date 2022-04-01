import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import WalletTable from '@components/WalletTable'
import PageTitle from '@components/PageTitle'
import { walletItems, pageItems } from '@model/config'

function Money(props: any) {
  const { name, value } = props

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        paddingLeft: '2rem',
        borderLeft: '1px solid #1f4a75',
      }}
    >
      <Typography
        sx={{
          width: '100%',
          fontSize: '1.5rem',
          fontWeight: 700,
          color: '#99CCF3',
        }}
      >
        {name}
      </Typography>
      <Typography
        sx={{
          width: '100%',
          fontWeight: 600,
          fontSize: '2rem',
          color: 'white',
        }}
      >
        Rs.{value}.00
      </Typography>
    </Box>
  )
}

function Wallet() {
  return (
    <Box width="100%">
      <PageTitle {...pageItems.wallet} />
      <Box
        sx={{
          display: 'flex',
          background:
            'linear-gradient(to right bottom, rgb(18 55 92), rgb(74 30 114) 120%)',
          marginBottom: '1rem',
          padding: '4rem 2rem',
          marginLeft: '-2rem',
          marginRight: '-2rem',
          justifyContent: 'space-between',
        }}
      >
        <Money name="Balance" value="8765"></Money>
        <Money name="Spent" value="99765"></Money>
        <Money name="Total" value="104630"></Money>
      </Box>
      <WalletTable list={walletItems} />
    </Box>
  )
}

export default Wallet
