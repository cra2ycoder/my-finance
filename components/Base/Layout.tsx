import React from 'react'
import Box from '@mui/material/Box'
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

export { MainFlexBox, FluidFlexBox }
