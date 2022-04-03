import React, { useState } from 'react'
import Link from '@mui/material/Link'
import Box from '@mui/material/Box'
import Badge from '@mui/material/Badge'
import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'
import Drawer from '@mui/material/Drawer'
import Typography from '@mui/material/Typography'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet'
import NotificationsIcon from '@mui/icons-material/Notifications'
import DateRangeIcon from '@mui/icons-material/DateRange'
import MenuIcon from '@mui/icons-material/Menu'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { deepPurple } from '@mui/material/colors'
import styles from './styles.module.scss'

function LetterAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar sx={{ backgroundColor: deepPurple[500] }}>
        <AccountCircleIcon />
      </Avatar>
    </Stack>
  )
}

function NotificationBadge() {
  return (
    <Badge badgeContent={4} color="warning">
      <NotificationsIcon color="action" sx={{ fill: 'black' }} />
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
    <Box marginLeft="2rem" display="flex" className={props.className}>
      {['Dashboard', 'Wallet', 'Debits', 'Investments', 'Golds', 'Loans'].map(
        (x, idx) => {
          const pageLink = '/' + x.toLowerCase().replace(/ /g, '-')
          return (
            <Link href={pageLink} key={`menu-item-${idx}`}>
              <Typography
                sx={{ margin: '0.8rem', color: props.color, fontWeight: 600 }}
              >
                {x}
              </Typography>
            </Link>
          )
        }
      )}
    </Box>
  )
}

function Header() {
  const [drawerState, setDrawerState] = useState(false)

  return (
    <header className={styles['header-wrapper']}>
      <Box
        className={`${styles['header-parent']} header-parent`}
        sx={{
          background: 'white',
          boxShadow: 'inset 0px -1px 1px #e7ebf0',
          backgroundColor: 'rgba(255,255,255,0.72)',
          backdropFilter: 'blur(20px)',
        }}
      >
        <Box display="flex" alignItems="center">
          <HeaderMenuIcon
            iconComponent={<MenuIcon sx={{ fill: '#1976d2' }} />}
            title="Menu"
            onClick={() => {
              setDrawerState(true)
            }}
          />
          <AccountBalanceWalletIcon sx={{ fill: '#1976d2', fontSize: 35 }} />
          <MenuList
            color="black"
            className={styles['menu-list-parent-desktop']}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            width: '150px',
            justifyContent: 'space-between',
          }}
        >
          <Box>
            <DateRangeIcon />
          </Box>
          <Box>
            <NotificationBadge />
          </Box>
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
        <MenuList className={styles['menu-list-parent-mobile']} />
      </Drawer>
    </header>
  )
}

export default Header
