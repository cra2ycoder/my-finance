import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import CallMadeIcon from '@mui/icons-material/CallMade'
import Button from '@mui/material/Button'
import { useRouter } from 'next/router'

function Money(props: any) {
  const router = useRouter()
  const { name, value, showButtons = true, link = '' } = props

  const navigateToLink = () => {
    router.push(link, undefined, { shallow: true })
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        paddingLeft: '2rem',
        borderLeft: '1px solid #1f4a75',
      }}
    >
      <Typography
        sx={{
          width: '100%',
          fontSize: '1.5rem',
          fontWeight: 400,
          color: '#99CCF3',
          letterSpacing: -1,
        }}
      >
        {name}
      </Typography>
      <Typography
        sx={{
          width: '100%',
          fontWeight: 600,
          fontSize: '2rem',
          color: 'white',
          marginTop: -1.5,
          letterSpacing: -1,
        }}
      >
        Rs.{value}.00
      </Typography>
      <Typography
        sx={{
          fontWeight: 400,
          fontSize: '0.9rem',
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          marginBottom: '1rem',
        }}
      >
        <CallMadeIcon sx={{ fill: 'white', fontSize: '1rem' }} />
        <span style={{ marginLeft: '0.5rem', color: 'white' }}>
          +2.65% than last month
        </span>
      </Typography>
      {showButtons && (
        <Button id="show-button" variant="contained" onClick={navigateToLink}>
          View
        </Button>
      )}
    </Box>
  )
}

export { Money }
export default Money
