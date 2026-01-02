import { useState, useEffect, useMemo } from "react";
import { UsuarioCard } from "../components/UsuarioCard"

const Usuarios = () => {
    const [usuarios, setUsuarios] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")
    const [search, setSearch] = useState("");
    const [recargar, setRecargar] = useState(0)


    useEffect(() => {
        const Solicitud = async () => {
            try {
                setLoading(true);
                setError("");

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
            } finally {
                setLoading(false)
            }

        }

        Solicitud()

    }, [recargar]);

    const buscarUsuario = useMemo(() => {
        return usuarios.filter(u =>
            u.name.toLowerCase().includes(search.toLowerCase())
        );
    }, [usuarios, search]);

    if (loading) {
        return console.log("Cargando usuarios...")
    }

    if (error) {
        return console.log(error);
    }




    return (
        <div>
            <h2>Usuarios</h2>

            <input
                type="search"
                placeholder="Buscar Usuario"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <button onClick={() => setRecargar(r => r + 1)}>Recargar Usuarios</button>

            <ul className="usuarios-list">
                {buscarUsuario.map(usuario => (
                    <UsuarioCard key={usuario.id} usuario={usuario} />
                ))}
            </ul>
        </div>
    );

}


export { Usuarios }