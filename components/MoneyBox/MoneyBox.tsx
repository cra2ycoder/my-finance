import React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import AddIcon from '@mui/icons-material/Add'
import TabList from '@mui/lab/TabList'
import TabContext from '@mui/lab/TabContext'
import TabPanel from '@mui/lab/TabPanel'
import Tab from '@mui/material/Tab'
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
          fontSize: '2rem',
          fontWeight: 700,
          marginBottom: '1rem',
        }}
      >
        Rs.0.00 / Rs.{totalValue}.00
      </Typography>
      {filteredList.length === 0 && (
        <Typography sx={{ margin: '2rem 0' }}>
          There are no {title} items
        </Typography>
      )}
      <Box display="grid" gap={2} className={styles['ms-grids-container']}>
        {filteredList.map((x, idx) => (
          <MoneyCard {...x} key={`filtered-item-${idx}`} />
        ))}
        <Button
          variant="contained"
          sx={{ height: '100%', borderRadius: '10px', minHeight: '176px' }}
          className={styles['add-button']}
          fullWidth={true}
        >
          <AddIcon sx={{ fontSize: 40 }} />
          <span
            style={{
              marginLeft: '0.4rem',
              fontSize: '1.2rem',
              letterSpacing: 0,
            }}
          >
            ADD {title.toUpperCase()}
          </span>
        </Button>
      </Box>
    </Box>
  )
}

function MoneyBoxTab(props: any) {
  const { defaultValue = '0', list = [], filters = [] } = props

  const [value, setValue] = React.useState(defaultValue)

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  return (
    <TabContext value={value}>
      <Box>
        <TabList
          onChange={handleChange}
          variant="scrollable"
          scrollButtons={false}
          aria-label="scrollable prevent tabs example"
          sx={{ marginLeft: '-1rem', marginRight: '-1rem' }}
        >
          {filters.map((x, idx) => (
            <Tab label={x.title} value={idx.toString()} />
          ))}
        </TabList>
      </Box>
      {filters.map((x, idx) => (
        <TabPanel
          value={idx.toString()}
          sx={{ paddingLeft: 0, paddingRight: 0 }}
        >
          <MoneyBox list={list} {...x} />
        </TabPanel>
      ))}
    </TabContext>
  )
}

export { MoneyBox, MoneyBoxTab }
export default MoneyBox
