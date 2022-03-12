import React from 'react'
// import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import NotificationsIcon from '@mui/icons-material/Notifications'

function DashboardGridItem(props: any) {
  return (
    <Grid item sx={{ backgroundColor: '#f0f0f0' }}>
      <NotificationsIcon sx={{ width: 75, height: 75 }} />
      <Typography sx={{ color: 'black' }}>{props.title || 'Title'}</Typography>
      <Typography sx={{ color: 'black' }}>
        {props.desc || 'desc goes here!'}
      </Typography>
    </Grid>
  )
}

function DashboardGrid(props: any) {
  const list = [
    {
      title: 'Monthly Expences',
      desc: 'commitments/unplanned/savings/pending',
    },
    {
      title: 'Investments',
      desc: 'Overall mutual funds/stocks/returns/SIP',
    },
    {
      title: 'Gold Savings',
      desc: 'Total golds/gold chit',
    },
    {
      title: 'Loans',
      desc: 'Personal/Plot/Home/Gold loans and EMIs',
    },
  ]

  return (
    <Grid
      container
      //   spacing={{ xs: 2, md: 2, lg: 2 }}
      //   columns={{ xs: 2, sm: 2, md: 2, lg: 2 }}
    >
      {list.map(x => (
        <DashboardGridItem {...x} />
      ))}
    </Grid>
  )
}

export default DashboardGrid
