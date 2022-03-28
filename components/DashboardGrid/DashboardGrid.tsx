import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance'
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange'
import DiamondIcon from '@mui/icons-material/Diamond'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet'

function DashboardGridItem(props: any) {
  return (
    <Box
      sx={{
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
        padding: '20%',
      }}
    >
      {props.icon}
      <Typography sx={{ color: '#235ad1', fontSize: '3.5vh', fontWeight: 100 }}>
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
  )
}

function DashboardGrid(props: any) {
  const list = [
    {
      title: 'Monthly Expences',
      desc: 'commitments/unplanned/savings/pending',
      icon: (
        <AccountBalanceWalletIcon
          sx={{ width: 50, height: 50, fill: '#707b8b' }}
        />
      ),
    },
    {
      title: 'Investments',
      desc: 'Overall mutual funds/stocks/returns/SIP',
      icon: (
        <CurrencyExchangeIcon sx={{ width: 50, height: 50, fill: '#707b8b' }} />
      ),
    },
    {
      title: 'Gold Savings',
      desc: 'Total golds/gold chit',
      icon: <DiamondIcon sx={{ width: 50, height: 50, fill: '#707b8b' }} />,
    },
    {
      title: 'Loans',
      desc: 'Personal/Plot/Home/Gold loans and EMIs',
      icon: (
        <AccountBalanceIcon sx={{ width: 50, height: 50, fill: '#707b8b' }} />
      ),
    },
  ]

  return (
    <Box display="grid" gap={2} className="dashboard-grids-container">
      {list.map((x, idx) => (
        <DashboardGridItem {...x} key={`grid-item-${idx}`} />
      ))}
    </Box>
  )
}

export default DashboardGrid
