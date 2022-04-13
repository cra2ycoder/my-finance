import React from 'react'
import Box from '@mui/material/Box'
import WalletItem from './WalletItem'
import { IWalletTableProps, IWalletItemProps } from './typings'

function WalletTable(props: IWalletTableProps) {
  const { list = [] } = props

  return (
    <Box>
      {list.map((x: IWalletItemProps, id: number) => (
        <WalletItem {...x} key={`wallet-item-${id}`} />
      ))}
    </Box>
  )
}

export { WalletTable }
export default WalletTable
