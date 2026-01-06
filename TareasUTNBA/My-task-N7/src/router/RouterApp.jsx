import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Layout } from "../layouts/Layout"
import { Inicio } from "../views/Inicio"
import { Nosotros } from "../views/Nosotros"
import { Contacto } from "../views/Contacto"
import { Producto } from "../views/Producto"

const RouterApp = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Inicio />} />
                    <Route path="/nosotros" element={<Nosotros />} />
                    <Route path="/contacto" element={<Contacto />} />
                    <Route path="/producto/:id" element={<Producto />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export { RouterApp }