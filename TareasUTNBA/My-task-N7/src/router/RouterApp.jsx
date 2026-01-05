import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Inicio } from "../views/Inicio"
import { Nosotros } from "../views/Nosotros"
import { Contacto } from "../views/Contacto"
import { Navbar } from "../components/Navbar"
import { Producto } from "../views/Producto"

const RouterApp = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/nosotros" element={<Nosotros />} />
                <Route path="/contacto" element={<Contacto />} />
                <Route path="/producto/:id" element={<Producto />} />
            </Routes>
        </BrowserRouter>
    )
}

export { RouterApp }