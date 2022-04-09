import React from 'react'
import PageTitle from '@components/PageTitle'
import MoneyBox, { MoneyBoxHolder } from '@components/MoneyBox'
import { investmentList, pageItems } from '@model/config'

function MonthlyExpenses() {
  const filters = [
    {
      type: 'mf',
      title: 'Mutual Funds',
    },
    {
      type: 'stocks',
      title: 'Stocks',
    },
    {
      type: 'bitcoins',
      title: 'Bitcoins',
    },
    {
      type: 'deposits',
      title: 'Deposits',
    },
  ]

  return (
    <>
      <PageTitle {...pageItems.investments}></PageTitle>
      <MoneyBoxHolder>
        {filters.map(x => (
          <MoneyBox list={investmentList} {...x} />
        ))}
      </MoneyBoxHolder>
    </>
  )
}

export default MonthlyExpenses
