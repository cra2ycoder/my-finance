import React, { useState } from 'react'
import Link from '@mui/material/Link'
import Box from '@mui/material/Box'
// import Drawer from '@mui/material/Drawer'
import Typography from '@mui/material/Typography'
// import Button from '@mui/material/Button'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet'
// import DarkModeIcon from '@mui/icons-material/DarkMode'
// import MenuIcon from '@mui/icons-material/Menu'
import { useTheme } from '@mui/material/styles'
import { MenuLink } from '@components/Base/Typography'
// import NotificationBadge from './NotificationBadge'
import Profile from './Profile'
import DateSelector from './DateSelector'
import { IHeaderMenuIconProps, IMenuListProps } from './typings'
import styles from './styles.module.scss'

function HeaderMenuIcon(props: IHeaderMenuIconProps) {
  const {
    link = '',
    title = '',
    color = '',
    iconComponent = <></>,
    onClick = () => {},
  } = props
  const theme = useTheme()

  return (
    <Link href={link} underline="none">
      <Box
        sx={{ display: 'flex', mr: 1, pr: 2 }}
        className={`menu-icon-${title?.toLowerCase()}`}
        onClick={onClick}
      >
        {iconComponent || <></>}
        <Typography
          sx={{ color: color || 'black', marginLeft: theme.spacing(1) }}
        >
          {title || ''}
        </Typography>
      </Box>
    </Link>
  )
}

function MenuList(props: IMenuListProps) {
  const { className = '', color = '' } = props

  const defaultMenuList = ['Dashboard', 'Wallet']

  return (
    <Box className={`${styles.menuListWrapper} ${className}`}>
      {defaultMenuList.map((x: string, idx: number) => {
        const pageLink = '/' + x.toLowerCase().replace(/ /g, '-')
        return (
          <MenuLink
            key={`menu-item-${idx}`}
            link={pageLink}
            text={x}
            color={color}
          />
        )
      })}
    </Box>
  )
}

function Header() {
  const theme = useTheme()

  return (
    <header className={styles.headerWrapper}>
      <Box
        className={styles.headerParent}
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.72)',
        }}
      >
        <Box className={styles.headerLeftPanel}>
          <AccountBalanceWalletIcon
            sx={{ fill: theme.palette.primary.main, fontSize: 35 }}
          />
          <MenuList
            className={styles.menuListParentDesktop}
            color={theme.palette.common.black}
          />
        </Box>
        <Box className={styles.headerRightPanel}>
          <DateSelector />
          {/* <NotificationBadge /> */}
          {/* <Button>
            <DarkModeIcon />
          </Button> */}
          <Profile />
        </Box>
      </Box>
    </header>
  )
}

export default Header
