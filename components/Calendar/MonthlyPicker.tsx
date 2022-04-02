import React from 'react'
import Selector from './Selector'

function MonthlyPicker() {
  return (
    <Selector
      label="Month"
      list={[
        'JAN',
        'FEB',
        'MAR',
        'APR',
        'MAY',
        'JUN',
        'JUL',
        'AUG',
        'SEP',
        'OCT',
        'NOV',
        'DEC',
      ]}
      id="month"
    />
  )
}

export { MonthlyPicker }
export default MonthlyPicker
