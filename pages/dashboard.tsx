import Box from '@mui/material/Box'
import PageTitle from '@components/PageTitle'
import {
  MonthlyChart,
  DailyChart,
  YearlySavingsChart,
  MonthlyIncomeChart,
} from '@components/Charts'
import { Money } from '@components/MoneyBox'
import { pageItems } from '@model/config'

function Dashboard() {
  return (
    <Box>
      <PageTitle {...pageItems.dashboard} />
      <Box
        className="wallet-info-panel"
        sx={{
          display: 'grid',
          background:
            'linear-gradient(to right bottom, rgb(18 55 92), rgb(74 30 114) 120%)',
          marginBottom: '1rem',
          padding: '4rem 2rem',
          marginLeft: '-2rem',
          marginRight: '-2rem',
          justifyContent: 'space-between',
          gridTemplateColumns: 'repeat(5, 1fr)',
        }}
      >
        <Money name="A/C Balance" value="54,835"></Money>
        <Money name="Total Properties" value="67,25,000"></Money>
        <Money name="Total Investments" value="34,67,291"></Money>
        <Money name="Total Golds" value="11,08,128"></Money>
        <Money name="Total Loans" value="17,92,000"></Money>
      </Box>
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
