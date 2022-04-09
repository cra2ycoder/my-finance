import React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import AddIcon from '@mui/icons-material/Add'
import MoneyCard from './MoneyCard'
import styles from './styles.module.scss'

function MoneyBox(props: any) {
  const { list = [], type = 'commitment', title = '' } = props
  const filteredList = list.filter(x => x.type === type)
  let totalValue = 0

  filteredList.forEach(a => {
    totalValue += a.value
  })

  return (
    <Box width="100%" paddingBottom="2rem" borderBottom="1px solid #d9d9d9">
      <Typography
        sx={{
          fontSize: '4vh',
          fontWeight: 400,
          marginBottom: '1rem',
          width: '100%',
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          fontSize: '2vh',
          fontWeight: 700,
          marginBottom: '1rem',
        }}
      >
        Rs.0.00 / Rs.{totalValue}.00
      </Typography>
      <Button
        variant="contained"
        sx={{ maxHeight: '40px' }}
        className={styles['add-button']}
        fullWidth={true}
      >
        <AddIcon />
        <span style={{ marginLeft: '0.4rem' }}>Add {title}</span>
      </Button>
      <Box display="grid" gap={2} className={styles['ms-grids-container']}>
        {filteredList.length === 0 && (
          <Typography>There are no {title} items</Typography>
        )}
        {filteredList.map((x, idx) => (
          <MoneyCard {...x} key={`filtered-item-${idx}`} />
        ))}
      </Box>
    </Box>
  )
}

function MoneyBoxHolder({ children }: any) {
  return (
    <Box width="100%" className={styles['ms-items-parent']}>
      {children}
    </Box>
  )
}

export { MoneyBox, MoneyBoxHolder }
export default MoneyBox
