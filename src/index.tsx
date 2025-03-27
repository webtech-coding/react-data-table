import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import DataTable from './components/dataTable'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DataTable />
  </StrictMode>,
)
