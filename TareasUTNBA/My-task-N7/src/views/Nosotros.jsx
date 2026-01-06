import { useNavigate } from "react-router-dom";

const Nosotros = () => {

    const navigate = useNavigate();

    return (
        <>
            <h2>Nosotros</h2>

            <button onClick={() => navigate(-1)}>
                Volver
            </button>
        </>
    )
}

export { Nosotros }