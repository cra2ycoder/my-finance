import React, { useState } from 'react'
import Link from '@mui/material/Link'
import Box from '@mui/material/Box'
// import Drawer from '@mui/material/Drawer'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import MenuIcon from '@mui/icons-material/Menu'
import { useTheme } from '@mui/material/styles'
import { MenuLink } from '@components/Base/Typography'
import NotificationBadge from './NotificationBadge'
import Profile from './Profile'
import DateSelector from './DateSelector'
import styles from './styles.module.scss'

interface IHeaderMenuIconProps {
  title: string
  link?: string
  color?: string
  onClick?: () => void
  iconComponent?: React.ReactNode
}

interface IMenuListProps {
  className: string
  color: string
}

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

  const defaultMenuList = [
    'Dashboard',
    'Wallet',
    'Debits',
    'Investments',
    'Golds',
    'Loans',
    'Insurances',
  ]

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
  const [drawerState, setDrawerState] = useState(false)

  return (
    <header className={styles.headerWrapper}>
      <Box
        className={styles.headerParent}
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.72)',
        }}
      >
        <Box className={styles.headerLeftPanel}>
          <HeaderMenuIcon
            iconComponent={
              <MenuIcon sx={{ fill: theme.palette.primary.main }} />
            }
            title=""
            onClick={() => {
              setDrawerState(true)
            }}
          />
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
          <NotificationBadge />
          <Button>
            <DarkModeIcon />
          </Button>
          <Profile />
        </Box>
      </Box>
      {/* <Drawer
        className={styles.headerDrawerParent}
        anchor="left"
        open={drawerState}
        onClose={() => {
          // setDrawerState(!drawerState)
        }}
      >
        <MenuList
          color={theme.palette.primary.main}
          className={styles.menuListParentMobile}
        />
      </Drawer> */}
    </header>
  )
}

export default Header
