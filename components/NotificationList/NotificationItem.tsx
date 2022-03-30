import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import DoneIcon from '@mui/icons-material/Done'
import CloseIcon from '@mui/icons-material/Close'
import EventRepeatIcon from '@mui/icons-material/EventRepeat'
import Paper from '@mui/material/Paper'

interface INotificationItemProps {
  title: string
  desc: string
  alertZone: 'red' | 'orange' | 'green' | 'yellow'
  commitment: 'monthly' | 'once' | '3months' | '6months'
  on: string
  type: 'credit' | 'debit'
  category: 'emi' | 'sip'
}

function NotificationItem(props: INotificationItemProps) {
  const {
    title = '',
    desc = '',
    alertZone = '',
    commitment = '',
    on = '',
    type = '',
    category,
  } = props

  return (
    <Paper sx={{ padding: '2rem' }}>
      <Typography
        sx={{
          fontSize: '1.3rem',
          fontWeight: 400,
          color: 'rgb(19, 47, 76)',
          marginBottom: '0.4rem',
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          fontSize: '0.9rem',
          fontWeight: 400,
          color: '#404040',
          marginBottom: '2rem',
        }}
      >
        {desc}
      </Typography>
      <Box
        display="flex"
        justifyContent="space-between"
        borderTop="1px solid #ccc"
        paddingTop="1rem"
      >
        <Button variant="outlined" color="error">
          <CloseIcon />
        </Button>
        <Button variant="outlined">
          <EventRepeatIcon />
        </Button>
        <Button variant="outlined" color="success">
          <DoneIcon />
        </Button>
      </Box>
    </Paper>
  )
}

export { NotificationItem }
export default NotificationItem
