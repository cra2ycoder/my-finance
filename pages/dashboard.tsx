import Box from '@mui/material/Box'
import PageTitle from '@components/PageTitle'
import { pageItems } from '@model/config'

function Dashboard() {
  return (
    <Box>
      <PageTitle {...pageItems.dashboard}></PageTitle>
    </Box>
  )
}

export default Dashboard
