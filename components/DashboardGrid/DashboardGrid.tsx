import React from 'react'
import Link from '@mui/material/Link'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import { dashboardItems } from '@model/config/data'
import { IDashboardGridItemProps } from './typings'
import styles from './styles.module.scss'

function DashboardGridItem(props: IDashboardGridItemProps) {
  const { name = '', link = '', icon = <></>, desc = '' } = props

  return (
    <Paper sx={{ borderRadius: '10px' }} elevation={1}>
      <Link href={link}>
        <Box
          sx={{
            textAlign: 'center',
            padding: '20% 3rem',
          }}
        >
          {icon}
          <Typography
            sx={{ color: '#235ad1', fontSize: '2rem', fontWeight: 500 }}
          >
            {name}
          </Typography>
          <Typography
            sx={{
              color: '#666666',
              fontSize: '1rem',
              wordBreak: 'break-word',
              fontWeight: 300,
            }}
          >
            {desc}
          </Typography>
        </Box>
      </Link>
    </Paper>
  )
}

function DashboardGrid() {
  return (
    <Box display="grid" gap={2} className={styles['dashboard-grids-container']}>
      {dashboardItems.map((x: IDashboardGridItemProps, idx: number) => (
        <DashboardGridItem {...x} key={`grid-item-${idx}`} />
      ))}
    </Box>
  )
}

export default DashboardGrid
