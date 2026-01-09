import { Link, useNavigate } from "react-router-dom";
import "../styles/Layout.css";
import { productos } from "../components/productos";

const Inicio = () => {

    const navigate = useNavigate();

    const handleNosotros = () => {
        navigate("/nosotros")
    }


    return (
        <>
            <main>
                <div>

                    <ul className="card-list">
                        {productos.map(p => (
                            <div className="card-product" key={p.id}>
                                <img className="card-image" src={p.imagen} />
                                <h3>{p.nombre}</h3>
                                <p>{p.descripcion}</p>
                                <Link to={`/producto/${p.id}`} className="btn-VerMas">
                                    VER MÁS
                                </Link>
                            </div>
                        ))}
                    </ul>

                </div>

                <div className="contenido-nosotros">
                    <button className="button-nosotros" onClick={handleNosotros}>¿Quienes somos?</button>
                </div>
            </main>
        </>
    )
}

export { Inicio }