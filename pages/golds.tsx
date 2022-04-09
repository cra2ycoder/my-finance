import React from 'react'
import PageTitle from '@components/PageTitle'
import MoneyBox, { MoneyBoxHolder } from '@components/MoneyBox'
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
      <PageTitle {...pageItems.golds}></PageTitle>
      <MoneyBoxHolder>
        {filters.map(x => (
          <MoneyBox list={goldList} {...x} />
        ))}
      </MoneyBoxHolder>
    </>
  )
}

export default MonthlyExpenses
