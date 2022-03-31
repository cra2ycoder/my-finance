import React from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import WalletItem from './WalletItem'
import { IWalletTableProps, IWalletItemProps } from './typings'

function WalletTable(props: IWalletTableProps) {
  const { list = [] } = props

  return (
    <Box width="100%">
      <Typography
        sx={{
          fontSize: '1.5rem',
          width: '100%',
          fontWeight: 600,
          color: '#0179f3',
          textAlign: 'right',
        }}
      >
        <span>Total Income: </span>
        <span>Rs. 1,23,400.00</span>
      </Typography>

      <Paper
        sx={{ borderRadius: '10px', width: '100%', marginTop: '1.5rem' }}
        elevation={1}
      >
        <Box
          className="wallet-table"
          sx={{
            width: '100%',
          }}
        >
          {list.map((x: IWalletItemProps, id: number) => (
            <WalletItem {...x} key={`wallet-item-${id}`} />
          ))}
        </Box>
      </Paper>
    </Box>
  )
}

export { WalletTable }
export default WalletTable
