
const UsuarioCard = ({ usuario }) => {
    return (
        <li>
            <strong>Nombre: </strong> {usuario.name} <br />
            <strong>Correo: </strong> {usuario.email}
        </li>
    )
}

export { UsuarioCard }