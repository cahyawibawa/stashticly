'use client'

import { useGetSummary } from '@/features/summary/api/use-get-summary'
import { formatDateRange } from '@/lib/utils'
import { useSearchParams } from 'next/navigation'
import { FaPiggyBank } from 'react-icons/fa'
import { FaArrowTrendDown, FaArrowTrendUp } from 'react-icons/fa6'
import DataCard, { DataCardLoading } from './data-card'

export const DataGrid = () => {
  const { data, isLoading } = useGetSummary()
  const params = useSearchParams()
  const to = params.get('to') || undefined
  const from = params.get('from') || undefined

  const dataRangeLabel = formatDateRange({ to, from })

  if (isLoading) {
    return (
      <div className="mb-8 grid grid-cols-1 gap-8 pb-2 lg:grid-cols-3">
        <DataCardLoading />
        <DataCardLoading />
        <DataCardLoading />
      </div>
    )
  }

  return (
    <div className="mb-8 grid grid-cols-1 gap-8 pb-2 lg:grid-cols-3">
      <DataCard
        title="Remaining"
        value={data?.remainingAmount}
        percentageChange={data?.remainingChange}
        icon={FaPiggyBank}
        dateRange={dataRangeLabel}
      />
      <DataCard
        title="Income"
        value={data?.incomeAmount}
        percentageChange={data?.incomeChange}
        icon={FaArrowTrendUp}
        dateRange={dataRangeLabel}
        variant="secondary"
      />
      <DataCard
        title="Expenses"
        value={data?.expensesAmount}
        percentageChange={data?.expensesChange}
        icon={FaArrowTrendDown}
        variant="danger"
        dateRange={dataRangeLabel}
      />
    </div>
  )
}
