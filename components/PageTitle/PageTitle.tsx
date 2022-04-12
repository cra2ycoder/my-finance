import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

function PageTitle(props: any) {
  const { title, desc, children } = props

  return (
    <Box
      width="100%"
      className="page-title"
      display="flex"
      justifyContent="space-between"
      marginBottom="2rem"
    >
      <Box>
        <Typography
          sx={{
            fontSize: '4rem',
            fontWeight: 700,
            color: 'rgb(24 118 209)', //rgb(19, 47, 76)
            letterSpacing: -4,
            lineHeight: 1,
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            fontSize: '1.5rem',
            fontWeight: 300,
            color: 'rgb(62, 80, 96)',
            letterSpacing: -1,
          }}
        >
          {desc}
        </Typography>
      </Box>
      <Box>{children}</Box>
    </Box>
  )
}

export { PageTitle }
export default PageTitle
