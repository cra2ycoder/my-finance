import React from 'react'
import PageTitle from '@components/PageTitle'
import { MoneyBoxTab } from '@components/MoneyBox'
import { debitList, pageItems } from '@model/config'

function MonthlyExpenses() {
  const filters = [
    {
      type: 'unplanned',
      title: 'Unplanned',
    },
    {
      type: 'commitment',
      title: 'Commitments',
    },
    {
      type: 'savings',
      title: 'Savings',
    },
  ]

  return (
    <>
      <PageTitle {...pageItems.debits} />
      <MoneyBoxTab list={debitList} filters={filters} />
    </>
  )
}

export default MonthlyExpenses
