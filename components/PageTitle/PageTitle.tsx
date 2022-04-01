import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

function PageTitle(props: any) {
  const { title, desc, children } = props
  return (
    <Box width="50%" className="page-title">
      <Typography
        sx={{
          fontSize: '4.5vh',
          fontWeight: 700,
          color: 'rgb(19, 47, 76)',
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          fontSize: '2vh',
          fontWeight: 300,
          marginBottom: '2rem',
          color: 'rgb(62, 80, 96)',
        }}
      >
        {desc}
      </Typography>
      {children}
    </Box>
  )
}

export { PageTitle }
export default PageTitle
