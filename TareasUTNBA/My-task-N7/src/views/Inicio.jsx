import { Link, useNavigate } from "react-router-dom";
import "../styles/Layout.css";

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
                        <div className="card-product">
                            <img className="card-image" src="https://acdn-us.mitiendanube.com/stores/002/393/211/products/ec4796b0-a6cf-45f5-ac41-7eddceea94cc-cd1ae7bcd96cf0e4c817616613340479-480-0.webp" ></img>
                            <h3>Remera Negra</h3>
                            <p>Remera de algodon de calidad...</p>
                            <button className="btn-VerMas"><Link to="/producto/1">VER MAS</Link></button>
                        </div>
                        <div className="card-product">
                            <img className="card-image" src="https://jc-moda.com/wp-content/uploads/2023/03/jogger-cargo.jpg" ></img>
                            <h3>Pantalon</h3>
                            <p>Remera de algodon de calidad...</p>
                            <button className="btn-VerMas"><Link to="/producto/2">VER MAS</Link></button>
                        </div>
                        <div className="card-product">
                            <img className="card-image" src="https://http2.mlstatic.com/D_NQ_NP_685741-MLA99580878408_122025-F.webp" ></img>
                            <h3>Zapatilla</h3>
                            <p>Remera de algodon de calidad...</p>
                            <button className="btn-VerMas"><Link to="/producto/3">VER MAS</Link></button>
                        </div>
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