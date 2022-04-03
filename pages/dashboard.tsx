import Box from '@mui/material/Box'
import PageTitle from '@components/PageTitle'
import {
  MonthlyChart,
  DailyChart,
  YearlySavingsChart,
} from '@components/Charts'
import { pageItems } from '@model/config'

function Dashboard() {
  return (
    <Box>
      <PageTitle {...pageItems.dashboard} />
      <Box>
        <MonthlyChart />
        <DailyChart />
        <YearlySavingsChart />
      </Box>
    </Box>
  )
}

export default Dashboard
