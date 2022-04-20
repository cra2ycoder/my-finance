import Box from '@mui/material/Box'
import PageTitle from '@components/PageTitle'
import Typography from '@mui/material/Typography'
import {
  MonthlyChart,
  DailyChart,
  YearlySavingsChart,
  MonthlyIncomeChart,
} from '@components/Charts'
import { MoneyTable } from '@components/MoneyBox'
import { pageItems } from '@model/config'

function Dashboard() {
  const moneyList = [
    { name: 'Wallet Balance', value: '54,835' },
    { name: 'Total Properties', value: '67,25,000' },
    { name: 'Total Investments', value: '34,67,291' },
    { name: 'Total Golds', value: '11,08,128' },
    { name: 'Total Loans', value: '17,92,000' },
  ]

  return (
    <Box>
      <PageTitle {...pageItems.dashboard}>
        <Typography
          sx={{
            width: '100%',
            fontSize: '3rem',
            fontWeight: 100,
            textAlign: 'right',
            marginTop: -3,
            letterSpacing: -2,
            color: 'rgb(62, 80, 96)',
          }}
        >
          You owned
        </Typography>
        <Typography
          sx={{
            width: '100%',
            fontWeight: 600,
            fontSize: '3rem',
            marginTop: -3,
            textAlign: 'right',
            letterSpacing: -3,
            color: '#1fa293',
          }}
        >
          Rs.1,32,84,912.00
        </Typography>
      </PageTitle>
      <MoneyTable list={moneyList} />
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
