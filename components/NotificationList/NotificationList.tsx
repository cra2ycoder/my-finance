import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import NotificationItem from './NotificationItem'
import styles from './styles.module.scss'

function FilterList(props: any) {
  const { list = [], type = 'red' } = props
  const filteredList = list.filter(x => x.alertZone === type)
  console.log({ filteredList })

  return (
    <Box width="100%">
      <Typography
        sx={{
          fontSize: '4.5vh',
          fontWeight: 800,
          color: type,
        }}
      >
        {type}
      </Typography>
      <Box display="grid" gap={2} className={styles['notify-grids-container']}>
        {filteredList.map(x => (
          <NotificationItem {...x} />
        ))}
      </Box>
    </Box>
  )
}

function NotificationList(props: any) {
  const { list = [] } = props

  return (
    <Box width="100%">
      <FilterList list={list} type="red" />
      <FilterList list={list} type="yellow" />
      <FilterList list={list} type="orange" />
      <FilterList list={list} type="green" />
    </Box>
  )
}

export { NotificationList }
export default NotificationList
