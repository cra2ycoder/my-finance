import Box from '@mui/material/Box'
import PageTitle from '@components/PageTitle'
import { pageItems } from '@model/config'

function Golds() {
  return (
    <Box>
      <PageTitle {...pageItems.golds}></PageTitle>
    </Box>
  )
}

export default Golds
