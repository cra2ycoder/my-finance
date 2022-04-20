import Box from '@mui/material/Box'
import WalletTable from '@components/WalletTable'
import PageTitle from '@components/PageTitle'
import { MoneyTable } from '@components/MoneyBox'
import { walletItems, pageItems } from '@model/config'

function Wallet() {
  const moneyList = [
    {
      name: 'Wallet Balance',
      value: '8,765',
    },
    {
      name: 'Total Spent',
      value: '99,765',
    },
    {
      name: 'Total Savings',
      value: '28,500',
    },
    {
      name: 'Grand Total',
      value: '1,04,630',
    },
  ]

  return (
    <Box width="100%">
      <PageTitle {...pageItems.wallet} />
      <MoneyTable list={moneyList} settings={{ showButtons: false }} />
      <Box className="wallet-table-wrapper">
        <WalletTable list={walletItems} />
      </Box>
    </Box>
  )
}

export default Wallet
