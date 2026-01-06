import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
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
        </nav>
    );
};

export { Navbar };