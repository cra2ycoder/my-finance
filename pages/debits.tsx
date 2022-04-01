import React from 'react'
import DebitList from '@components/DebitList'
import PageTitle from '@components/PageTitle'
import { debitList, pageItems } from '@model/config'

function MonthlyExpenses() {
  return (
    <>
      <PageTitle {...pageItems.debits}></PageTitle>
      <DebitList list={debitList} />
    </>
  )
}

export default MonthlyExpenses
