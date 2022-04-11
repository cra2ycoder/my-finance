import React from 'react'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'

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
      <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://cra2ycoder.github.io/profile">
          Cra2y Coder
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </footer>
  )
}

export { Footer }
export default Footer
