import Box from '@mui/material/Box'
import PageTitle from '@components/PageTitle'
import {
  MonthlyChart,
  DailyChart,
  YearlySavingsChart,
  MonthlyIncomeChart,
} from '@components/Charts'
import { pageItems } from '@model/config'

function Dashboard() {
  return (
    <Box>
      <PageTitle {...pageItems.dashboard} />
      <Box className="dashboard-page-wrapper">
        <MonthlyIncomeChart />
        <DailyChart />
        <MonthlyChart />
        <YearlySavingsChart />
      </Box>
    </Box>
  )
}

export default Dashboard
