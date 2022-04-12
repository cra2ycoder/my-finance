import React from 'react'
import PageTitle from '@components/PageTitle'
import { MoneyBoxTab } from '@components/MoneyBox'
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
      <PageTitle {...pageItems.investments} />
      <MoneyBoxTab list={investmentList} filters={filters} />
    </>
  )
}

export default MonthlyExpenses
