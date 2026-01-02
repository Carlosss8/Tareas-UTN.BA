import { useState, useEffect } from "react";

const Usuarios = () => {
    const [usuarios, setUsuarios] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")


    useEffect(() => {
        const Solicitud = async () => {
            try {
                const res = await fetch('https://jsonplaceholder.typicode.com/users')

                if (!res.ok) {
                    throw new Error("Error al obtener los usuarios");
                }

                const data = await res.json();
                setUsuarios(data);
                setLoading(false);

            } catch (error) {
                setError("No se pudieron cargar los usuarios");
                setLoading(false);
            }

        }

        Solicitud()

    }, []);

    if (loading) {
        return <p>Cargando usuarios...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }




    return (
        <div>
            <h2>Usuarios</h2>

            <ul className="usuarios-list">
                {usuarios.map((usuario) => (
                    <li key={usuario.id}>
                        <strong>Nombre: </strong> {usuario.name} <br />
                        <strong>Correo: </strong> {usuario.email}
                    </li>
                ))}
            </ul>
        </div>

    );

}


export { Usuarios }