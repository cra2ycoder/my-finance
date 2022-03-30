import React, { useState } from 'react'
import Link from '@mui/material/Link'
import Box from '@mui/material/Box'
import Badge from '@mui/material/Badge'
import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'
import Drawer from '@mui/material/Drawer'
import Typography from '@mui/material/Typography'
import DashboardIcon from '@mui/icons-material/Dashboard'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet'
import NotificationsIcon from '@mui/icons-material/Notifications'
import MenuIcon from '@mui/icons-material/Menu'
import styles from './styles.module.scss'

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

function HeaderMenuIcon(props: any = {}) {
  return (
    <Link href={props.link}>
      <Box
        sx={{ display: 'flex', mr: 1, pl: 2, pr: 2 }}
        className={`menu-icon-${props?.title?.toLowerCase()}`}
        onClick={props?.onClick}
      >
        {props.iconComponent || <></>}
        <Typography sx={{ color: props?.color || 'black', marginLeft: 1 }}>
          {props.title || ''}
        </Typography>
      </Box>
    </Link>
  )
}

function MenuList(props = {}) {
  return (
    <>
      <HeaderMenuIcon
        iconComponent={<DashboardIcon sx={{ fill: props?.color || 'black' }} />}
        title="Dashboard"
        color={props.color}
        link="/dashboard"
      />
      <HeaderMenuIcon
        iconComponent={
          <AccountBalanceWalletIcon sx={{ fill: props?.color || 'black' }} />
        }
        title="Wallet"
        color={props.color}
        link="/wallet"
      />
    </>
  )
}

function Header() {
  const [drawerState, setDrawerState] = useState(false)

  return (
    <>
      <Box
        className={`${styles['header-parent']} header-parent`}
        sx={{
          background:
            'linear-gradient(-90deg, rgb(0, 89, 178), rgb(0, 127, 255) 120%)',
        }}
      >
        <Box display="flex" alignItems="center">
          <HeaderMenuIcon
            iconComponent={<MenuIcon sx={{ fill: 'white' }} />}
            title="Menu"
            onClick={() => {
              setDrawerState(true)
            }}
          />
          <Typography sx={{ color: 'white', mr: 4, fontWeight: 600 }}>
            My Finance
          </Typography>
          <MenuList color="white" />
        </Box>
        <Box display="flex" alignItems="center">
          <NotificationBadge />
          <LetterAvatars />
        </Box>
      </Box>
      <Drawer
        className="header-drawer-parent"
        sx={{ width: '300px' }}
        anchor="left"
        open={drawerState}
        onClose={() => {
          setDrawerState(!drawerState)
        }}
      >
        <MenuList />
      </Drawer>
    </>
  )
}

export default Header
