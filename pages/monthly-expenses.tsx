import React from 'react'
import MonthlySpentList from '@components/MonthlySpentList'
import { monthlySpentList } from '@model/config'

function MonthlyExpenses() {
  return <MonthlySpentList list={monthlySpentList} />
}

export default MonthlyExpenses
