import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Inicio } from "../views/Inicio"
import { Nosotros } from "../views/Nosotros"
import { Contacto } from "../views/Contacto"

const RouterApp = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/nosotros" element={<Nosotros />} />
                <Route path="/contacto" element={<Contacto />} />
            </Routes>
        </BrowserRouter>
    )
}

export { RouterApp }