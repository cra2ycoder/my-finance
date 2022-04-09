import React from 'react'
import PageTitle from '@components/PageTitle'
import MoneyBox, { MoneyBoxHolder } from '@components/MoneyBox'
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
      <PageTitle {...pageItems.debits}></PageTitle>
      <MoneyBoxHolder>
        {filters.map(x => (
          <MoneyBox list={debitList} {...x} />
        ))}
      </MoneyBoxHolder>
    </>
  )
}

export default MonthlyExpenses
