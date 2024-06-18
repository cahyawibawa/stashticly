import { DataCharts } from '@/components/charts/data-charts'
import { DataGrid } from '@/components/data-grid'

export default function DashboardPage() {
  return (
    <div className="mx-auto -mt-24 w-full max-w-screen-2xl pb-10">
      <DataGrid />
      <DataCharts />
    </div>
  )
}
