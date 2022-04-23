import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import DoneIcon from '@mui/icons-material/Done'
import CloseIcon from '@mui/icons-material/Close'
import EventRepeatIcon from '@mui/icons-material/EventRepeat'
import DeleteIcon from '@mui/icons-material/Delete'
import Paper from '@mui/material/Paper'

interface IMoneyCardProps {
  title: string
  desc: string
  type: string
  on: string
  value: string | number
}

function MoneyCard(props: IMoneyCardProps) {
  const { title = '', desc = '', type = '', value = 0 } = props

  return (
    <Paper
      sx={{
        padding: '1rem 1.5rem',
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderBottom: '2px solid #f0f0f0',
      }}
      elevation={0}
      variant="elevation"
    >
      <Box>
        <Typography
          sx={{
            fontWeight: 600,
            color: 'rgb(24 118 209)',
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            fontSize: '14px',
            fontWeight: 400,
            color: 'rgb(62, 80, 96)',
          }}
        >
          Due Date: 01/10/2022
        </Typography>
        <Typography
          sx={{
            fontSize: '1.5rem',
            fontWeight: 700,
            color: 'rgb(19, 47, 76)',
            margin: '6px 0',
          }}
        >
          Rs.{value}.00
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          paddingTop: '0.6rem',
          marginLeft: '-0.4rem',
          marginRight: '-0.4rem',
          borderTop: '1px solid #f0f0f0',
        }}
      >
        <IconButton>
          <DeleteIcon />
        </IconButton>
        <IconButton>
          <CloseIcon />
        </IconButton>
        <IconButton>
          <EventRepeatIcon />
        </IconButton>
        <IconButton>
          <DoneIcon />
        </IconButton>
      </Box>
    </Paper>
  )
}

export { MoneyCard }
export default MoneyCard
