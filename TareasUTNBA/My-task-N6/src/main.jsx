import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Usuarios } from './views/Usuarios.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Usuarios />
  </StrictMode>,
)
