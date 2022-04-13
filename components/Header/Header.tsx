import React, { useState } from 'react'
import Link from '@mui/material/Link'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import MenuIcon from '@mui/icons-material/Menu'
import NotificationBadge from './NotificationBadge'
import Profile from './Profile'
import DateSelector from './DateSelector'
import styles from './styles.module.scss'

function HeaderMenuIcon(props: any = {}) {
  return (
    <Link href={props.link}>
      <Box
        sx={{ display: 'flex', mr: 1, pr: 2 }}
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
      {[
        'Dashboard',
        'Wallet',
        'Debits',
        'Investments',
        'Golds',
        'Loans',
        'Insurances',
      ].map((x, idx) => {
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
      })}
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
            justifyContent: 'space-between',
            marginRight: '-1rem',
          }}
        >
          <DateSelector />
          <NotificationBadge />
          <Button>
            <DarkModeIcon />
          </Button>
          <Profile />
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
