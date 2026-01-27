import { Link, useNavigate } from "react-router-dom";
import "../styles/Layout.css";
import { getAllProducts } from "../services/productos.js"
import { useState, useEffect } from "react";

const Inicio = () => {

    const navigate = useNavigate();
    const [products, setProducts] = useState([]);

    const handleNosotros = () => {
        navigate("/nosotros")
    }

    const fetchingData = async () => {
        const docs = await getAllProducts();
        const data = docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
        setProducts(data);
    }

    useEffect(() => {
        fetchingData()
    }, []);

    return (
        <main>
            <ul className="card-list">
                {products.map(p => (
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

            <div className="contenido-nosotros">
                <button className="button-nosotros" onClick={handleNosotros}>
                    ¿Quienes somos?
                </button>
            </div>
        </main>
    )
}

export { Inicio }