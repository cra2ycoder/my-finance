import Box from '@mui/material/Box'
import PageTitle from '@components/PageTitle'
import Typography from '@mui/material/Typography'
import {
  MonthlyChart,
  DailyChart,
  YearlySavingsChart,
  MonthlyIncomeChart,
} from '@components/Charts'
// import { MoneyTable } from '@components/MoneyBox'
import { GridBox } from '@components/Base/Layout'
import { pageItems } from '@model/config'

function Dashboard() {
  return (
    <Box>
      <PageTitle {...pageItems.dashboard}>
        <Typography
          sx={{
            width: '100%',
            fontSize: '3rem',
            fontWeight: 100,
            marginTop: -3,
            letterSpacing: -2,
            color: 'rgb(62, 80, 96)',
            textAlign: 'right',
          }}
        >
          Current Balance
        </Typography>
        <Typography
          sx={{
            width: '100%',
            fontWeight: 600,
            fontSize: '3rem',
            marginTop: -3,
            letterSpacing: -3,
            color: '#1fa293',
            textAlign: 'right',
          }}
        >
          Rs.94,012.00
        </Typography>
      </PageTitle>
      {/* <MoneyTable list={moneyList} /> */}
      <GridBox
        className="dashboard-graphs-wrapper"
        columns={{ lg: 2, md: 1, sm: 1 }}
      >
        <MonthlyIncomeChart />
        <DailyChart />
        <MonthlyChart />
        <YearlySavingsChart />
      </GridBox>
    </Box>
  )
}

export default Dashboard
