import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDataTable from './components/dataTable'
import './assets/styles/main.scss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ReactDataTable />
  </StrictMode>,
)
