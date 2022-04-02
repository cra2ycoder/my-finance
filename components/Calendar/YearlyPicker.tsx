import React from 'react'
import Selector from './Selector'

function YearlyPicker() {
  return (
    <Selector label="Year" list={[2018, 2019, 2020, 2021, 2022]} id="year" />
  )
}

export { YearlyPicker }
export default YearlyPicker
