export interface ITypoProps {
  text: string
}

export interface IMenuLinkProps {
  link: string
  text: string
  color?: string
}

export interface IBreakpointProps {
  xs?: number
  sm?: number
  md?: number
  lg?: number
  xl?: number
}

export interface IGridBoxProps {
  children: React.ReactNode
  columns: IBreakpointProps
  breakpoints?: IBreakpointProps
  sx?: any
  gap?: number | string
  [key: string]: any
}
