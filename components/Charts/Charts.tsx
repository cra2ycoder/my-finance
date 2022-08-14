import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar, Line } from 'react-chartjs-2'
import CallMadeIcon from '@mui/icons-material/CallMade'
import { MonthlyPicker, YearlyPicker, SpentPicker } from '@components/Calendar'
import {
  options,
  yearlyData,
  monthlyData,
  monthlyIncomeData,
  yearlySSData,
} from './options'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
)

function Chart(props: any) {
  return (
    <Paper
      elevation={1}
      sx={{
        padding: '2rem',
        marginBottom: '1rem',
        borderRadius: 4,
        boxSizing: 'border-box',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          marginBottom: '2rem',
        }}
      >
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: '2rem',
            color: 'rgb(19, 47, 76)',
            letterSpacing: -1,
          }}
        >
          {props.title}
        </Typography>
        <Typography
          sx={{
            fontWeight: 400,
            fontSize: '1rem',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <CallMadeIcon />
          <span style={{ marginLeft: '0.5rem' }}>+2.65% than last month</span>
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          gap: '1rem',
          height: '40px',
          marginBottom: '2rem',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
        className="chart-filter"
      >
        <SpentPicker />
        <MonthlyPicker />
        <YearlyPicker />
        <Button id="show-button" variant="contained">
          Show
        </Button>
      </Box>
      {props.children}
    </Paper>
  )
}

function MonthlyChart() {
  return (
    <Chart title="Monthly Spent, 2022">
      <Bar options={options} data={yearlyData} />
    </Chart>
  )
}

function MonthlyIncomeChart() {
  return (
    <Chart title="Monthly Income, 2022">
      <Line options={options} data={monthlyIncomeData} />
    </Chart>
  )
}

function DailyChart() {
  return (
    <Chart title="Daily Spent, 2022">
      <Line options={options} data={monthlyData} />
    </Chart>
  )
}

function YearlySavingsChart() {
  return (
    <Chart title="Yearly Spent, 2022">
      <Line options={options} data={yearlySSData} />
    </Chart>
  )
}

export {
  Chart,
  MonthlyChart,
  DailyChart,
  YearlySavingsChart,
  MonthlyIncomeChart,
}
export default DailyChart
