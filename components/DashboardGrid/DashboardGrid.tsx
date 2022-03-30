import React from 'react'
import Link from '@mui/material/Link'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { dashboardItems } from '@model/config/data'
import { IDashboardGridItemProps } from './typings'
import styles from './styles.module.scss'

function DashboardGridItem(props: IDashboardGridItemProps) {
  const { name = '', link = '', icon = <></>, desc = '' } = props

  return (
    <Link href={link} sx={{ backgroundColor: '#f0f0f0' }}>
      <Box
        sx={{
          textAlign: 'center',
          padding: '20%',
        }}
      >
        {icon}
        <Typography sx={{ color: '#235ad1', fontSize: '3.5vh' }}>
          {name}
        </Typography>
        <Typography
          sx={{
            color: '#666666',
            fontSize: '1.8vh',
            wordBreak: 'break-word',
            fontWeight: 300,
          }}
        >
          {desc}
        </Typography>
      </Box>
    </Link>
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
