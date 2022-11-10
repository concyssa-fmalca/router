import React from 'react'
import { BarChart } from './BarChart' 
import { LineChart } from './LineChart'
import { PieChart } from './PieChart'

export const Charts = () => {
  return (
    <div>
        <BarChart />
        <LineChart />
        <PieChart />
    </div>
  )
}
