import { useParams } from "react-router-dom";
import "../styles/Layout.css";
import { getAllProducts } from "../services/productos.js"
import { useState, useEffect } from "react";

const Producto = () => {

    const { id } = useParams();
    const [producto, setProducto] = useState(null);

    const handleNosotros = () => {
        navigate("/nosotros")
    }

    useEffect(() => {
        const fetchingData = async () => {
            const docs = await getAllProducts();
            const data = docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));

            const prodEncontrado = data.find(p => p.id === id);
            setProducto(prodEncontrado);
        };

        fetchingData();
    }, [id]);

    if (!producto) {
        return <h2>Producto no encontrado</h2>;
    }

    return (
        <main>
            <div className="card-list">
                <div className="card-product">
                    <img className="card-image" src={producto.imagen} />
                    <h3>{producto.nombre}</h3>
                    <h4>${producto.precio}</h4>
                    <p>{producto.descripcion}</p>
                    <p>Stock = {producto.stock}</p>
                </div>
            </div>
        </main>
    );
};

export { Producto };