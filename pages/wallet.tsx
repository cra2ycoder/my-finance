import WalletTable from '@components/WalletTable'
import { walletItems } from '@model/config/data'

function Wallet() {
  return <WalletTable list={walletItems} />
}

export default Wallet
