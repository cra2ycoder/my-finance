import React from 'react'
import { GridBox } from '@components/Base/Layout'
import WalletItem from './WalletItem'
import { IWalletTableProps, IWalletItemProps } from './typings'

function WalletTable(props: IWalletTableProps) {
  const { list = [] } = props

  return (
    <GridBox
      className="dashboard-graphs-wrapper"
      columns={{ xl: 4, lg: 3, md: 2, sm: 1 }}
      gap="0.5rem"
    >
      {list.map((x: IWalletItemProps, id: number) => (
        <WalletItem {...x} key={`wallet-item-${id}`} />
      ))}
    </GridBox>
  )
}

export { WalletTable }
export default WalletTable
