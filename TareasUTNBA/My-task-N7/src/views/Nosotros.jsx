import { useNavigate } from "react-router-dom";
import "../styles/Layout.css";

const Nosotros = () => {

    const navigate = useNavigate();

    return (
        <>
            <main>
                <div className="contenido-producto">
                    <div className="card-login">
                        <h2>Nosotros somos una tienda de ropa...</h2>
                    </div>
                </div>

                <div className="contenido-nosotros">
                    <button className="button-nosotros" onClick={() => navigate(-1)}>Volver</button>
                </div>
            </main >
        </>
    )
}

export { Nosotros }