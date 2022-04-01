import React from 'react'
import Typography from '@mui/material/Typography'

function Footer() {
  return (
    <footer
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        padding: '1rem 0',
        marginTop: '2rem',
      }}
    >
      <Typography
        sx={{
          color: '#727272',
          fontSize: '0.8rem',
        }}
      >
        Copyright © 2022 Cra2yCoder.
      </Typography>
    </footer>
  )
}

export { Footer }
export default Footer
