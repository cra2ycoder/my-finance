import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
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

  const [value, setValue] = useState(0)

  return (
    <Box
      sx={{
        padding: '1rem',
        borderBottom: '2px solid #f0f0f0',
        borderRadius: '10px',
        backgroundColor: 'white',
        marginBottom: '2px',
        justifyContent: 'space-between',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Typography sx={{ color: '#235ad1' }}>
          {name}
          <span
            style={{
              color: '#727272',
              fontSize: '0.8rem',
            }}
          >
            {info}
          </span>
        </Typography>
        {enableEdit === true && (
          <Button variant="outlined" sx={{ padding: 0, marginLeft: '1rem' }}>
            update
          </Button>
        )}
      </Box>
      <Typography
        className="wallet-price"
        sx={{
          color: '#404040',
          fontWeight: 700,
          marginTop: '0.4rem',
        }}
      >
        Rs. {value || defaultValue}.00
      </Typography>
    </Box>
  )
}

export { WalletItem }
export default WalletItem
