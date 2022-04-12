import React from 'react'
import PageTitle from '@components/PageTitle'
import { MoneyBoxTab } from '@components/MoneyBox'
import { goldList, pageItems } from '@model/config'

function MonthlyExpenses() {
  const filters = [
    {
      type: 'chains',
      title: 'Chains',
    },
    {
      type: 'rings',
      title: 'Rings',
    },
    {
      type: 'bangles',
      title: 'Bangles',
    },
    {
      type: 'haaram',
      title: 'Haarams',
    },
    {
      type: 'bracelet',
      title: 'Bracelets',
    },
  ]

  return (
    <>
      <PageTitle {...pageItems.golds} />
      <MoneyBoxTab list={goldList} filters={filters} />
    </>
  )
}

export default MonthlyExpenses
