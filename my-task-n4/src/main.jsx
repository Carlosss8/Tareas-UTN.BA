import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Tarjeta } from './Tarjeta'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="contenedor-tarjetas">
      <Tarjeta
        nombre="Lionel Messi"
        profesion="Jugador de futbol"
        imagen="https://www.fundacionkonex.org/custom/web/data/imagenes/repositorio/2021/03/12/16575/2021031202544061e0e3f25c3041f849de6b510817fb34.jpg"
        descripcion="El mejor jugador del mundo"
      />
      <Tarjeta
        nombre="Enzo Fernandez"
        profesion="Jugador de futbol"
        imagen="https://upload.wikimedia.org/wikipedia/commons/d/df/Enzo_Fern%C3%A1ndez_WC2022.jpg"
        descripcion="CRACK"
      />
      <Tarjeta
        nombre="Marcelo Gallardo"
        profesion="Director Tecnico / Ex Jugador de futbol"
        imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_V3-kPm3XPtwVoT2jQq-5v9ZEz_q308_7WQ&s"
        descripcion="MUÑEECOO!"
      />
    </div>
  </StrictMode>
)