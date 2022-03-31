import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import MonthlySpentItem from './MonthlySpentItem'
import styles from './styles.module.scss'

function FilterList(props: any) {
  const { list = [], type = 'commitment', title = '' } = props
  const filteredList = list.filter(x => x.type === type)

  return (
    <Box width="100%" paddingBottom="2rem" borderBottom="1px solid #d9d9d9">
      <Typography
        sx={{
          fontSize: '4.5vh',
          fontWeight: 700,
          paddingTop: '1rem',
          marginBottom: '2rem',
        }}
      >
        {title}
      </Typography>
      <Box display="grid" gap={2} className={styles['ms-grids-container']}>
        {filteredList.map(x => (
          <MonthlySpentItem {...x} />
        ))}
      </Box>
    </Box>
  )
}

function MonthlySpentList(props: any) {
  const { list = [] } = props

  return (
    <Box width="100%">
      <FilterList list={list} type="commitment" title="Commitments" />
      <FilterList list={list} type="unplanned" title="Unplanned" />
      <FilterList list={list} type="savings" title="Savings" />
    </Box>
  )
}

export { MonthlySpentList }
export default MonthlySpentList
