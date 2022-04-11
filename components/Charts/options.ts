const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    interaction: {
      intersect: false,
    },
  },
}

const months = [
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

const yearlyData = {
  labels: months,
  datasets: [
    {
      label: 'Income',
      data: months.map(() => Math.random() * 150000),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
    {
      label: 'Expenses',
      data: months.map(() => Math.random() * 150000),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Savings',
      data: months.map(() => Math.random() * 150000),
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

const monthlyIncomeData = {
  labels: months,
  datasets: [
    {
      label: 'Income',
      data: dates.map(() => Math.random() * 150000),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
}

const yearlySSData = {
  labels: [2018, 2019, 2020, 2021, 2022, 2023],
  datasets: [
    {
      label: 'Expenses',
      data: dates.map(() => Math.random() * 150000),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      fill: 'start',
    },
    {
      label: 'Savings',
      data: dates.map(() => Math.random() * 150000),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
      fill: 'start',
    },
  ],
}

export {
  options,
  months,
  yearlyData,
  dates,
  monthlyData,
  monthlyIncomeData,
  yearlySSData,
}
