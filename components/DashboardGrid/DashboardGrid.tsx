import React from 'react'
import Link from '@mui/material/Link'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { dashboardItems } from '@model/config/data'

function DashboardGridItem(props: any) {
  return (
    <Link href={props.link}>
      <Box
        sx={{
          backgroundColor: '#f0f0f0',
          textAlign: 'center',
          padding: '20%',
        }}
      >
        {props.icon}
        <Typography
          sx={{ color: '#235ad1', fontSize: '3.5vh', fontWeight: 100 }}
        >
          {props.title || 'Title'}
        </Typography>
        <Typography
          sx={{
            color: '#666666',
            fontWeight: 100,
            fontSize: '1.8vh',
            wordBreak: 'break-word',
          }}
        >
          {props.desc || 'desc goes here!'}
        </Typography>
      </Box>
    </Link>
  )
}

function DashboardGrid(props: any) {
  return (
    <Box display="grid" gap={2} className="dashboard-grids-container">
      {dashboardItems.map((x, idx) => (
        <DashboardGridItem {...x} key={`grid-item-${idx}`} />
      ))}
    </Box>
  )
}

export default DashboardGrid
