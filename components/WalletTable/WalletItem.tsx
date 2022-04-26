import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { FluidFlexBox } from '@components/Base/Layout'
import { IWalletItemProps } from './typings'

function WalletItem(props: IWalletItemProps) {
  const {
    name = 'unknown',
    info = '',
    value: defaultValue = 0,
    groups = [],
    enableEdit = true,
  } = props

  const [value, setValue] = useState(0)

  return (
    <FluidFlexBox
      sx={{
        padding: '1rem',
        borderBottom: '2px solid #f0f0f0',
        borderRadius: '10px',
        backgroundColor: 'white',
        marginBottom: '2px',
        flexDirection: 'column',
      }}
    >
      <FluidFlexBox>
        <Typography sx={{ color: '#235ad1' }}>
          {name}
          <span
            style={{
              color: '#727272',
              fontSize: '0.8rem',
              display: 'block',
            }}
          >
            {info}
          </span>
        </Typography>
        {enableEdit === true && (
          <Button
            variant="outlined"
            sx={{ padding: 0, marginLeft: '1rem', height: '2rem' }}
          >
            update
          </Button>
        )}
      </FluidFlexBox>
      <Typography
        sx={{
          color: '#404040',
          fontWeight: 700,
          marginTop: '0.4rem',
        }}
      >
        Rs. {value || defaultValue}.00
      </Typography>
    </FluidFlexBox>
  )
}

export { WalletItem }
export default WalletItem
