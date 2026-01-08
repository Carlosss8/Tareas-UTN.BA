import { Link, useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";


const Inicio = () => {

    const navigate = useNavigate();

    const handleNosotros = () => {
        navigate("/nosotros")
    }



    return (
        <>
            <main>
                <div>
                    <h2>Inicio</h2>

                    <ul>
                        <li><Link to="/producto/1">Producto 1</Link></li>
                        <li><Link to="/producto/2">Producto 2</Link></li>
                        <li><Link to="/producto/3">Producto 3</Link></li>
                    </ul>
                </div>

                <div>
                    <button onClick={handleNosotros}>¿Quienes somos?</button>
                </div>
            </main>
        </>
    )
}

export { Inicio }