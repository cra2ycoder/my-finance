import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import PageTitle from '@components/PageTitle'
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
import { pageItems } from '@model/config'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
  },
}

const labels = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

export const yearlyData = {
  labels,
  datasets: [
    {
      label: 'Income',
      data: labels.map(() => Math.random() * 150000),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
    {
      label: 'Expenses',
      data: labels.map(() => Math.random() * 150000),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Savings',
      data: labels.map(() => Math.random() * 150000),
      backgroundColor: 'rgb(36 255 0 / 50%)',
    },
  ],
}

const dates = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31,
]

const monthlyData = {
  labels: dates,
  datasets: [
    {
      label: 'Daily Expenses',
      data: dates.map(() => Math.random() * 150000),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
}

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

function Dashboard() {
  return (
    <Box>
      <PageTitle {...pageItems.dashboard} />
      <Box>
        <Chart title="Daily Spent for April, 2022.">
          <Bar options={options} data={monthlyData} />
        </Chart>
        <Chart title=" Monthly Spent for 2022">
          <Bar options={options} data={yearlyData} />
        </Chart>
      </Box>
    </Box>
  )
}

export default Dashboard
