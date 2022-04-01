import React from 'react'
import WalletItem from './WalletItem'
import { IWalletTableProps, IWalletItemProps } from './typings'

function WalletTable(props: IWalletTableProps) {
  const { list = [] } = props

  return (
    <>
      {list.map((x: IWalletItemProps, id: number) => (
        <WalletItem {...x} key={`wallet-item-${id}`} />
      ))}
    </>
  )
}

export { WalletTable }
export default WalletTable
