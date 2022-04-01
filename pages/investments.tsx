import Box from '@mui/material/Box'
import PageTitle from '@components/PageTitle'
import { pageItems } from '@model/config'

function Investments() {
  return (
    <Box>
      <PageTitle {...pageItems.investments}></PageTitle>
    </Box>
  )
}

export default Investments
