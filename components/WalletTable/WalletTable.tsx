import React from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import WalletItem from './WalletItem'
import { IWalletTableProps, IWalletItemProps } from './typings'

function WalletTable(props: IWalletTableProps) {
  const { list = [] } = props

  return (
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
  )
}

export { WalletTable }
export default WalletTable
