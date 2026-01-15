import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Forms } from './views/forms'
import { FormsReact } from './views/reactHookForm'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1 style={{ textAlign: "center" }}>Formulario sin react-hook-form</h1>
    <Forms />
    <h1 style={{ textAlign: "center" }}>Formulario con react-hook-form</h1>
    <FormsReact />
  </StrictMode>
)
