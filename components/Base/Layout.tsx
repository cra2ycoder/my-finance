import React from 'react'
import Box from '@mui/material/Box'
import { useTheme } from '@mui/material/styles'
import styles from './layout.module.scss'

function MainFlexBox({ children }: any = {}) {
  return <main className={styles.mainFlexBox}>{children}</main>
}

function FluidFlexBox({ children, ...rest }: any = {}) {
  return (
    <Box width="100%" display="flex" justifyContent="space-between" {...rest}>
      {children}
    </Box>
  )
}

interface IBreakpointProps {
  xs?: number
  sm?: number
  md?: number
  lg?: number
  xl?: number
}

interface IGridBoxProps {
  children: React.ReactNode
  columns: IBreakpointProps
  breakpoints?: IBreakpointProps
  sx?: any
  gap?: number | string
  [key: string]: any
}

function GridBox(props: IGridBoxProps) {
  const {
    children,
    columns = {},
    className = '',
    gap = '',
    sx = {},
    breakpoints = {},
    ...rest
  } = props
  const { xs = 0, sm = 0, md = 0, lg = 0, xl = 0 } = columns

  const theme = useTheme()

  const getBreakPointsCSS = () => {
    const breakPointsKeys = Object.keys(theme.breakpoints.values).reverse()
    let cssString = ''

    breakPointsKeys.forEach(bp => {
      const columnCount = columns[bp]
      const breakpointWidth = breakpoints[bp] || theme.breakpoints.values[bp]

      if (columnCount > 0) {
        cssString += `\n@media (max-width: ${breakpointWidth}px) {
          .${className} {
            grid-template-columns: repeat(${columnCount}, 1fr);
          }
        } \n`
      }
    })

    return cssString
  }

  return (
    <Box
      className={className}
      sx={{
        display: 'grid',
        justifyContent: 'space-between',
        gap: gap || '1.5rem',
        gridTemplateColumns: `repeat(${columns.xl || columns.lg}, 1fr)`,
        ...sx,
      }}
      {...rest}
    >
      <style dangerouslySetInnerHTML={{ __html: getBreakPointsCSS() }} />
      {children}
    </Box>
  )
}

export { MainFlexBox, FluidFlexBox, GridBox }
