import { PaidCustomersChart } from './components/charts/paid-customers'
import { QuantityStudentsForYearChart } from './components/charts/quantity-students-for-year'
import { StudentsByNeighborhoodChart } from './components/charts/students-by-neighborhood'

export function HomePage() {
  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <h1 className="text-2xl font-medium">Dashboard</h1>
        <p className="text-sm text-zinc-500">
          Visualize a métrica dos seus clientes
        </p>
      </div>

      <div className="flex flex-1 flex-col gap-4">
        <div className="grid auto-rows-min gap-4 md:grid-cols-4">
          <PaidCustomersChart />
          <StudentsByNeighborhoodChart />
          <QuantityStudentsForYearChart />
        </div>
      </div>
    </div>
  )
}
