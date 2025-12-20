import "./Tarjeta.css"

const Tarjeta = ({ nombre, profesion, imagen, descripcion }) => {
    return (
        <main>
            <div className="tarjeta">
                <img src={imagen} alt={nombre} width="180" />
                <h2>{nombre}</h2>
                <h3>{profesion}</h3>
                <p>{descripcion}</p>
            </div>
        </main>

    )
}

export { Tarjeta }

