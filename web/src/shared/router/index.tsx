import { MainLayout } from '@/view/layouts/main'
import { HomePage } from '@/view/pages/home'
import { SchoolsPage } from '@/view/pages/schools'
import { StudentsPage } from '@/view/pages/students'
import { Route, Routes } from 'react-router-dom'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/students" element={<StudentsPage />} />
        <Route path="/schools" element={<SchoolsPage />} />
        <Route path="/settings" element={<HomePage />} />
      </Route>
    </Routes>
  )
}
