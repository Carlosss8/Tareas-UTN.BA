import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Layout } from "../layouts/Layout"
import { Inicio } from "../views/Inicio"
import { Nosotros } from "../views/Nosotros"
import { Contacto } from "../views/Contacto"
import { Producto } from "../views/Producto"
import { Login } from "./Login"
import { ProtectedRoute } from "./ProtectedRoute"
import { useState } from "react"

const RouterApp = () => {

    const [isAuth, setIsAuth] = useState(
        JSON.parse(localStorage.getItem("isAuth")) || false
    );

    const login = () => {
        setIsAuth(true);
        localStorage.setItem("isAuth", true);
    };

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem("isAuth");
    };

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout onLogin={login} onLogout={logout} isAuth={isAuth} />}>
                    <Route path="/" element={<Inicio />} />
                    <Route path="/nosotros" element={<Nosotros />} />
                    <Route path="/contacto" element={<Contacto />} />
                    <Route path="/login" element={<Login onLogin={login} />} />

                    <Route
                        path="/producto/:id"
                        element={
                            <ProtectedRoute isAuth={isAuth}>
                                <Producto />
                            </ProtectedRoute>
                        }
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export { RouterApp };