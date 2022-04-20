import React from 'react'
import styles from './layout.module.scss'

function MainFlexBox({ children }: any = {}) {
  return <main className={styles.mainFlexBox}>{children}</main>
}

export { MainFlexBox }
