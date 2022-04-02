import React from 'react'
import Selector from './Selector'

function SpentPicker() {
  return (
    <Selector
      label="Spent"
      list={[
        'grocery',
        'petrol',
        'car maintanance',
        'online purchases',
        'gas',
        'loans',
        'golds',
      ]}
      id="spent"
    />
  )
}

export { SpentPicker }
export default SpentPicker
