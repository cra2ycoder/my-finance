import React from 'react'
import PageTitle from '@components/PageTitle'
import MoneyBox, { MoneyBoxHolder } from '@components/MoneyBox'
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
      <PageTitle {...pageItems.loans}></PageTitle>
      <MoneyBoxHolder>
        {filters.map(x => (
          <MoneyBox list={loanList} {...x} />
        ))}
      </MoneyBoxHolder>
    </>
  )
}

export default MonthlyExpenses
