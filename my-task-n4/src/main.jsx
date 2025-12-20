import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Tarjeta } from './Tarjeta'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Tarjeta
      nombre="Lionel Messi"
      profesion="Jugador"
      imagen="https://www.fundacionkonex.org/custom/web/data/imagenes/repositorio/2021/03/12/16575/2021031202544061e0e3f25c3041f849de6b510817fb34.jpg"
      descripcion="El mejor jugador del mundo"
    />
  </StrictMode>
)