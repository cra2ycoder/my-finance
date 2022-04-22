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
import { GridBox } from '@components/Base/Layout'
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
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography
          sx={{
            fontSize: '2rem',
            fontWeight: 700,
            marginBottom: '1rem',
            width: '75%',
          }}
        >
          Rs.0.00 / Rs.{totalValue}.00
        </Typography>
        <Button
          variant="contained"
          sx={{ height: '100%', borderRadius: '4px' }}
          className={styles['add-button']}
        >
          <AddIcon />
          <span
            style={{
              marginLeft: '0.4rem',
              letterSpacing: 0,
            }}
          >
            ADD {title.toUpperCase()}
          </span>
        </Button>
      </Box>
      {filteredList.length === 0 && (
        <Typography sx={{ margin: '2rem 0' }}>
          There are no {title} items
        </Typography>
      )}
      <GridBox
        className="ms-grids-container"
        columns={{ xl: 4, lg: 3, md: 2, sm: 1 }}
        gap="1rem"
      >
        {filteredList.map((x: any, idx: number) => (
          <MoneyCard {...x} key={`filtered-item-${idx}`} />
        ))}
      </GridBox>
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
          variant="scrollable"
          aria-label="scrollable prevent tabs example"
          scrollButtons={false}
          onChange={handleChange}
          sx={{ marginLeft: '-1rem', marginRight: '-1rem' }}
        >
          {filters.map((x: any, idx: number) => (
            <Tab
              label={x.title}
              value={idx.toString()}
              key={`tab-menu-${idx}`}
            />
          ))}
        </TabList>
      </Box>
      {filters.map((x: Object, idx: number) => (
        <TabPanel
          key={`tab-panel-${idx}`}
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
