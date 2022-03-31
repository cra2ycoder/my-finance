import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import DoneIcon from '@mui/icons-material/Done'
import CloseIcon from '@mui/icons-material/Close'
import EventRepeatIcon from '@mui/icons-material/EventRepeat'
import Paper from '@mui/material/Paper'

interface IMonthlySpentItemProps {
  title: string
  desc: string
  type: 'commitment' | 'unplanned' | 'savings'
  on: string
  value: string | number
}

function MonthlySpentItem(props: IMonthlySpentItemProps) {
  const { title = '', desc = '', type = '', value = 0 } = props

  return (
    <Paper
      sx={{
        padding: '1.5rem',
        borderRadius: '10px',
      }}
      elevation={1}
    >
      <Typography
        sx={{
          fontSize: '1.3rem',
          fontWeight: 600,
          color: 'rgb(19, 47, 76)',
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          fontSize: '0.9rem',
          fontWeight: 400,
          color: 'rgb(62, 80, 96)',
        }}
      >
        {desc}
      </Typography>
      <Typography
        sx={{
          fontSize: '2rem',
          fontWeight: 700,
          color: '#0072e3',
          margin: '0.4rem 0',
        }}
      >
        Rs.{value}.00
      </Typography>
      <Box display="flex" justifyContent="space-between" paddingTop="1rem">
        <Button variant="outlined" color="error">
          <CloseIcon />
          <span style={{ marginLeft: '0.4rem' }}>decline</span>
        </Button>
        <Button variant="outlined">
          <EventRepeatIcon />
          <span style={{ marginLeft: '0.4rem' }}>postponed</span>
        </Button>
        <Button variant="outlined" color="success">
          <DoneIcon />
          <span style={{ marginLeft: '0.4rem' }}>done</span>
        </Button>
      </Box>
    </Paper>
  )
}

export { MonthlySpentItem }
export default MonthlySpentItem
