import { useParams } from "react-router-dom";

const Producto = () => {
    const { id } = useParams();

    return (
        <div>
            <h2>Producto</h2>
            <p>ID del producto: <strong>{id}</strong></p>
        </div>
    );
};

export { Producto }