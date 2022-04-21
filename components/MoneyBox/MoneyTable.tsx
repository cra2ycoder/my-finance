import React from 'react'
import Box from '@mui/material/Box'
import { GridBox } from '@components/Base/Layout'
import Money from './Money'

function MoneyTable(props: any) {
  const { list = [], settings = {} } = props

  const gridColumns = list.length <= 4 ? list.length : 5

  return (
    <GridBox
      className="money-table-wrapper"
      sx={{
        background:
          'linear-gradient(to right bottom, rgb(18 55 92), rgb(74 30 114) 120%)',
        marginBottom: '1rem',
        padding: '4rem 2rem',
        marginLeft: '-2rem',
        marginRight: '-2rem',
      }}
      columns={{
        xl: gridColumns,
        lg: 3,
        md: 2,
        sm: 1,
      }}
      breakpoints={{
        lg: 1400,
      }}
    >
      {list.map(x => (
        <Money {...x} {...settings} />
      ))}
    </GridBox>
  )
}

export { MoneyTable }
export default MoneyTable
