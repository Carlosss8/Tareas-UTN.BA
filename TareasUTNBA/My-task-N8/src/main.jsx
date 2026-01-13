import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Forms } from './views/forms'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Forms />
  </StrictMode>,
)
