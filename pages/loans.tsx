import Box from '@mui/material/Box'
import PageTitle from '@components/PageTitle'
import { pageItems } from '@model/config'

function Loans() {
  return (
    <Box>
      <PageTitle {...pageItems.loans}></PageTitle>
    </Box>
  )
}

export default Loans
