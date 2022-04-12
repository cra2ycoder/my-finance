import React from 'react'
import PageTitle from '@components/PageTitle'
import { MoneyBoxTab } from '@components/MoneyBox'
import { loanList, pageItems } from '@model/config'

function MonthlyExpenses() {
  const filters = [
    {
      type: 'house',
      title: 'House Loan',
    },
    {
      type: 'plot',
      title: 'Plot Loan',
    },
    {
      type: 'personal',
      title: 'Personal Loan',
    },
    {
      type: 'gold',
      title: 'Gold Loan',
    },
    {
      type: 'others',
      title: 'Others',
    },
  ]

  return (
    <>
      <PageTitle {...pageItems.loans} />
      <MoneyBoxTab list={loanList} filters={filters} />
    </>
  )
}

export default MonthlyExpenses
