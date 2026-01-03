
const UsuarioCard = ({ usuario }) => {
    return (
        <li className="usuario-card">
            <strong>Nombre: </strong> {usuario.name} <br />
            <strong>Correo: </strong> {usuario.email}
        </li>
    )
}

export { UsuarioCard }