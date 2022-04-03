import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import DoneIcon from '@mui/icons-material/Done'
import CloseIcon from '@mui/icons-material/Close'
import EventRepeatIcon from '@mui/icons-material/EventRepeat'
import DeleteIcon from '@mui/icons-material/Delete'
import Paper from '@mui/material/Paper'
import styles from './styles.module.scss'

interface IDebitItemProps {
  title: string
  desc: string
  type: 'commitment' | 'unplanned' | 'savings'
  on: string
  value: string | number
}

function DebitItem(props: IDebitItemProps) {
  const { title = '', desc = '', type = '', value = 0 } = props

  return (
    <Paper
      sx={{
        padding: '1rem 1.5rem',
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
      elevation={1}
    >
      <Box>
        <Typography
          sx={{
            fontSize: '1.3rem',
            fontWeight: 600,
            color: 'rgb(19, 47, 76)',
          }}
        >
          {title}
        </Typography>
        {/* <Typography
            sx={{
              fontSize: '0.9rem',
              fontWeight: 400,
              color: 'rgb(62, 80, 96)',
            }}
          >
            {desc}
          </Typography> */}
        <Typography
          sx={{
            fontSize: '0.9rem',
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
            color: '#0072e3',
          }}
        >
          Rs.{value}.00
        </Typography>
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        paddingTop="1rem"
        className={styles['action-buttons']}
      >
        <Button variant="outlined" color="error">
          <DeleteIcon />
          <span style={{ marginLeft: '0.4rem' }}>remove</span>
        </Button>
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

export { DebitItem }
export default DebitItem
