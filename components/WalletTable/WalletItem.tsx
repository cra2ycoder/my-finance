import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Collapse from '@mui/material/Collapse'
import IconButton from '@mui/material/IconButton'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import Button from '@mui/material/Button'
import WalletTable from './WalletTable'
import { IWalletItemProps } from './typings'

function WalletItem(props: IWalletItemProps) {
  const {
    name = 'unknown',
    info = '',
    value: defaultValue = 0,
    groups = [],
    enableCollapse = groups.length > 0,
    enableEdit = true,
  } = props

  const [open, setOpen] = useState(false)
  const [value, setValue] = useState(0)

  const toggleCollapse = () => {
    setOpen(!open)
  }

  return (
    <Box
      sx={{
        padding: '1rem',
        borderBottom: '1px solid #f0f0f0',
        borderRadius: '10px',
        backgroundColor: 'white',
        marginBottom: '2px',
      }}
    >
      <Box
        display="flex"
        sx={{
          alignItems: 'center',
          marginLeft: enableCollapse === false ? '2rem' : '0',
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
          <Typography sx={{ color: '#235ad1' }}>
            {name}
            <Typography
              sx={{
                color: '#727272',
                fontSize: '0.8rem',
              }}
            >
              {info}
            </Typography>
          </Typography>
          <Typography
            sx={{
              color: '#404040',
            }}
          >
            <span style={{ marginRight: '1rem', fontSize: '1rem' }}>
              Rs. {value || defaultValue}.00
            </span>
            {enableEdit === true && (
              <Button
                variant="outlined"
                sx={{ padding: 0, marginLeft: '1rem' }}
              >
                edit
              </Button>
            )}
          </Typography>
        </Box>
      </Box>
      {enableCollapse === true && (
        <Collapse in={open} timeout="auto" unmountOnExit>
          <WalletTable list={groups} />
        </Collapse>
      )}
    </Box>
  )
}

export { WalletItem }
export default WalletItem
