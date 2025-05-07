import { DataTable } from './components/data-table'
import data from './components/data.json'

export function StudentsPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <h1 className="text-2xl font-medium">Alunos</h1>
        <p className="text-sm text-zinc-500">
          Gerencie seus alunos aqui. Você pode adicionar, editar ou excluir
          alunos conforme necessário.
        </p>
      </div>

      <DataTable data={data} />
    </div>
  )
}
