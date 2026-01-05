import { Link } from "react-router-dom";

const Inicio = () => {
    return (
        <>
            <div>
                <h2>Inicio</h2>
            </div>
            <nav>
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/nosotros">Nosotros</Link></li>
                    <li><Link to="/contacto">Contacto</Link></li>
                </ul>
            </nav>
        </>
    )
}

export { Inicio }