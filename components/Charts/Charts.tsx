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
      <Typography
        sx={{
          width: '100%',
          fontWeight: 600,
          fontSize: '2rem',
          marginBottom: '2rem',
        }}
      >
        {props.title}
      </Typography>
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
        <Button id="showt-button" variant="contained">
          Show
        </Button>
      </Box>
      {props.children}
    </Paper>
  )
}

function MonthlyChart() {
  return (
    <Chart title="Monthly spent for the Year, 2022">
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
    <Chart title="Daily Spent for the April, 2022">
      <Bar options={options} data={monthlyData} />
    </Chart>
  )
}

function YearlySavingsChart() {
  return (
    <Chart title="Yearly spent & savings for the Year, 2022">
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
