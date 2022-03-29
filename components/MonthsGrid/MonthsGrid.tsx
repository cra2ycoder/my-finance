import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { months } from '@model/config'

function MonthsGrid() {
  return (
    <Box display="grid" gap={2} className="months-grids-container">
      {months.map(x => (
        <Box
          sx={{
            backgroundColor: '#f0f0f0',
            textAlign: 'center',
            padding: '20%',
          }}
        >
          <Typography
            sx={{
              color: '#666666',
              fontWeight: 400,
              fontSize: '1.8vh',
              wordBreak: 'break-word',
            }}
          >
            {x}
          </Typography>
        </Box>
      ))}
    </Box>
  )
}

export { MonthsGrid }
export default MonthsGrid
