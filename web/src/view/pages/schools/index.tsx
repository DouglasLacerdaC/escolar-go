import { DataTable } from './components/data-table'
import data from './components/data.json'

export function SchoolsPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <h1 className="text-2xl font-medium">Responsáveis e alunos</h1>
        <p className="text-sm text-zinc-500">
          Gerenciamento de responsáveis e alunos
        </p>
      </div>

      <DataTable data={data} />
    </div>
  )
}
