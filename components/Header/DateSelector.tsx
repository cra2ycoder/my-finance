import React from 'react'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import EventIcon from '@mui/icons-material/Event'
import YearlyPicker from '@components/Calendar/YearlyPicker'
import MonthlyPicker from '@components/Calendar/MonthlyPicker'
import menuPageProps from './props'

function DateSelector() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <EventIcon />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        {...menuPageProps}
      >
        <MenuItem>
          <MonthlyPicker />
        </MenuItem>
        <MenuItem>
          <YearlyPicker />
        </MenuItem>
      </Menu>
    </div>
  )
}

export { DateSelector }
export default DateSelector
