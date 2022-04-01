import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { options, yearlyData, monthlyData } from './options'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

function Chart(props: any) {
  return (
    <Paper
      elevation={1}
      sx={{
        padding: '3% 5%',
        marginBottom: '4rem',
        marginLeft: '-2rem',
        marginRight: '-2rem',
        borderRadius: 0,
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
      {props.children}
    </Paper>
  )
}

function MonthlyChart() {
  return (
    <Chart title=" Monthly Spent for 2022">
      <Bar options={options} data={yearlyData} />
    </Chart>
  )
}

function DailyChart() {
  return (
    <Chart title="Daily Spent for April, 2022.">
      <Bar options={options} data={monthlyData} />
    </Chart>
  )
}

export { Chart, MonthlyChart, DailyChart }
export default DailyChart
