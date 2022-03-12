import React from 'react'
import Box from '@mui/material/Box'
import Badge from '@mui/material/Badge'
import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import DashboardIcon from '@mui/icons-material/Dashboard'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet'
import NotificationsIcon from '@mui/icons-material/Notifications'

function LetterAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar>M</Avatar>
    </Stack>
  )
}

function NotificationBadge() {
  return (
    <Badge badgeContent={4} color="warning" sx={{ mr: 4 }}>
      <NotificationsIcon color="action" sx={{ fill: 'white' }} />
    </Badge>
  )
}

function MenuIcon(props: any = {}) {
  return (
    <Box sx={{ display: 'flex', mr: 1 }}>
      {props.iconComponent || <></>}
      <Typography sx={{ color: 'white', marginLeft: 1 }}>
        {props.title || ''}
      </Typography>
    </Box>
  )
}

function Header() {
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Box display="flex" alignItems="center">
        <Typography sx={{ color: 'white', mr: 4 }}>My Finance</Typography>
        <MenuIcon
          iconComponent={<DashboardIcon sx={{ fill: 'white' }} />}
          title="Dashboard"
        />
        <MenuIcon
          iconComponent={<AccountBalanceWalletIcon sx={{ fill: 'white' }} />}
          title="Wallet"
        />
      </Box>
      <Box display="flex" alignItems="center">
        <NotificationBadge />
        <LetterAvatars />
      </Box>
    </Box>
  )
}

export default Header
