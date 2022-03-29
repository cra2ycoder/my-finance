import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Collapse from '@mui/material/Collapse'
import IconButton from '@mui/material/IconButton'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import Button from '@mui/material/Button'

interface WalletItemProps {
  name: string
  defaultValue: number | string
  groups?: WalletItemProps[]
  enableCollapse?: boolean
  enableEdit?: boolean
}

function WalletItem(props: WalletItemProps) {
  const {
    name = 'unknown',
    defaultValue = 0,
    groups = [],
    enableCollapse = false,
    enableEdit = true,
  } = props

  const [open, setOpen] = useState(true)
  const [value, setValue] = useState(0)

  const toggleCollapse = () => {
    setOpen(!open)
  }

  return (
    <Box
      sx={{
        marginTop: '2rem',
      }}
    >
      <Box
        display="flex"
        sx={{
          alignItems: 'center',
          padding: '0.4rem 1rem',
          borderBottom: '1px solid #f0f0f0',
        }}
      >
        {enableCollapse === true && (
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => toggleCollapse()}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        )}
        <Box
          display="flex"
          justifyContent="space-between"
          width="100%"
          alignItems="center"
        >
          <Typography
            sx={{ color: '#235ad1', fontSize: '1rem', fontWeight: 100 }}
          >
            {name}
          </Typography>
          <Typography
            sx={{
              color: '#235ad1',
              fontSize: '1rem',
              fontWeight: 100,
            }}
          >
            <span style={{ marginRight: '1rem' }}>
              Rs. {value || defaultValue}.00
            </span>
            {enableEdit === true && <Button>edit</Button>}
          </Typography>
        </Box>
      </Box>
      {enableCollapse === true && (
        <Collapse in={open} timeout="auto" unmountOnExit>
          <Box sx={{ margin: 1 }}>test</Box>
        </Collapse>
      )}
    </Box>
  )
}

export { WalletItem }
export default WalletItem
