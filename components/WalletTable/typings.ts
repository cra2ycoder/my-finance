export interface IWalletItemProps {
  name: string
  value: number | string
  info?: string
  groups?: IWalletItemProps[]
  enableEdit?: boolean
}

export interface IWalletTableProps {
  list: IWalletItemProps[]
}
