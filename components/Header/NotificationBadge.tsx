import React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import MenuItem from '@mui/material/MenuItem'
import Badge from '@mui/material/Badge'
import NotificationsIcon from '@mui/icons-material/Notifications'
import Popover from '@mui/material/Popover'
import { green, pink } from '@mui/material/colors'
import Avatar from '@mui/material/Avatar'
import AssignmentIcon from '@mui/icons-material/Assignment'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import menuPageProps from './props'

function NotificationItem(props: any) {
  return (
    <MenuItem
      sx={{
        padding: '1rem',
        whiteSpace: 'wrap',
        flexWrap: 'wrap',
        borderBottom: '1px solid white',
      }}
      selected={props?.isNew}
    >
      <Box sx={{ width: '15%' }}>
        <Avatar sx={{ bgcolor: green[500] }}>
          <AssignmentIcon />
        </Avatar>
      </Box>
      <Box sx={{ width: '85%' }}>
        <Typography
          sx={{
            color: props?.color || 'black',
            marginLeft: 1,
            fontSize: '0.9rem',
          }}
        >
          {props?.title || 'HDFC Loan EMI Rs.18718.00'}
        </Typography>
        <Typography
          sx={{
            color: props?.color || 'rgb(99, 115, 129)',
            marginLeft: 1,
            marginTop: 1,
            display: 'flex',
            fontSize: '0.9rem',
            alignItems: 'center',
          }}
        >
          <AccessTimeIcon sx={{ marginRight: 1, fontSize: 20 }} />
          {props?.title || '14/04/2022'}
        </Typography>
      </Box>
    </MenuItem>
  )
}

function NotificationList(props: any) {
  return (
    <Box
      sx={{
        borderBottom: '1px solid rgba(145, 158, 171, 0.24)',
      }}
    >
      <Typography
        sx={{
          color: props?.color || 'black',
          marginLeft: 1,
          padding: '1rem',
          fontWeight: 600,
        }}
      >
        {props?.title || 'title'}
      </Typography>
      {props?.list?.map(x => (
        <NotificationItem {...x} isNew={props?.title === 'New'} />
      ))}
    </Box>
  )
}

function NotificationBadge(props) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Box>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <Badge badgeContent={4} color="warning">
          <NotificationsIcon color="action" sx={{ fill: 'black' }} />
        </Badge>
      </Button>
      <Popover
        id="notification-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        {...menuPageProps}
      >
        <Box
          sx={{
            width: '320px',
            padding: '1rem',
            borderBottom: '1px solid rgba(145, 158, 171, 0.24)',
          }}
        >
          <Typography
            sx={{
              color: props?.color || 'black',
              marginLeft: 1,
              fontWeight: 600,
            }}
          >
            Notifications
          </Typography>
          <Typography
            sx={{ color: props?.color || 'rgb(99, 115, 129)', marginLeft: 1 }}
          >
            you have 3 unread messages
          </Typography>
        </Box>
        <NotificationList title="New" list={[1, 2, 3]} />
        <NotificationList title="Before that" list={[1, 2, 3]} />
        <Box
          sx={{
            padding: '1rem',
            borderBottom: '1px solid rgba(145, 158, 171, 0.24)',
            textAlign: 'center',
          }}
        >
          <Typography
            sx={{
              color: props?.color || 'black',
              marginLeft: 1,
              fontWeight: 600,
              color: '#1876d1',
            }}
          >
            View All
          </Typography>
        </Box>
      </Popover>
    </Box>
  )
}

export { NotificationBadge, NotificationList, NotificationItem }
export default NotificationBadge
