import React from 'react'
import PageTitle from '@components/PageTitle'
import { MoneyBoxTab } from '@components/MoneyBox'
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
      <PageTitle {...pageItems.insurances} />
      <MoneyBoxTab list={insuranceList} filters={filters} />
    </>
  )
}

export default Insurances
