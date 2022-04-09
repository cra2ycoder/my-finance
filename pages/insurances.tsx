import React from 'react'
import PageTitle from '@components/PageTitle'
import MoneyBox, { MoneyBoxHolder } from '@components/MoneyBox'
import { insuranceList, pageItems } from '@model/config'

function Insurances() {
  const filters = [
    {
      type: 'lic',
      title: 'LIC',
    },
    {
      type: 'health',
      title: 'Health Insurance',
    },
  ]

  return (
    <>
      <PageTitle {...pageItems.insurances}></PageTitle>
      <MoneyBoxHolder>
        {filters.map(x => (
          <MoneyBox list={insuranceList} {...x} />
        ))}
      </MoneyBoxHolder>
    </>
  )
}

export default Insurances
