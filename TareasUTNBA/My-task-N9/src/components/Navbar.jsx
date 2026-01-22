import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = ({ onLogin, onLogout, isAuth }) => {
    return (
        <nav className="navbar">
            <div className="nav-left"></div>
            <ul className="navbar-list">
                <li>
                    <Link to="/" end className="nav-link"> Inicio</Link>
                </li>
                <li>
                    <Link to="/nosotros" className="nav-link">Nosotros</Link>
                </li>
                <li>
                    <Link to="/contacto" className="nav-link">Contacto</Link>
                </li>
            </ul>
            <div className="button-sesion">
                {isAuth ? (
                    <button onClick={onLogout}>Cerrar sesión</button>
                ) : (
                    <button onClick={onLogin}>Iniciar sesión</button>
                )}
            </div>
        </nav>
    );
};

export { Navbar };