import { useParams } from "react-router-dom";
import "../styles/Layout.css";
import { productos } from "../components/productos";

const Producto = () => {
    const { id } = useParams();

    const producto = productos.find(p => p.id === id);

    if (!producto) {
        return <h2>Producto no encontrado</h2>;
    }

    return (
        <main>
            <div className="card-list">
                <div className="card-product">
                    <img className="card-image" src={producto.imagen} />
                    <h3>{producto.nombre}</h3>
                    <p>{producto.descripcion}</p>
                </div>
            </div>
        </main>
    );
};

export { Producto };