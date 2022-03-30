export interface IWalletItemProps {
  name: string
  value: number | string
  info?: string
  groups?: IWalletItemProps[]
  enableCollapse?: boolean
  enableEdit?: boolean
}

export interface IWalletTableProps {
  list: IWalletItemProps[]
}
