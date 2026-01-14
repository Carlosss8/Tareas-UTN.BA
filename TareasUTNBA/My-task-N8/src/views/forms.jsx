import { useState } from "react";
import "../styles/forms.css";

const Forms = () => {

    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [error, setError] = useState("")
    const [visible, setVisible] = useState(false)
    const [mensaje, setMensaje] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Datos enviados:', { nombre, email });

        setNombre("");
        setEmail("");
        setError("");
        setMensaje("");
        setVisible(false);
    };

    const teclaEnter = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            setMensaje("Presionaste Enter en el campo Nombre");
        }
    }

    return (
        <main className="contacto-container">
            <form onSubmit={handleSubmit} className="contacto-form">
                <h2>Contacto</h2>

                <div className="form-group">
                    <p>Nombre</p>
                    <input
                        type="text"
                        id="name"
                        placeholder="Tu nombre"
                        onKeyDown={teclaEnter}
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        onFocus={() => setError("")}
                        onBlur={() => {
                            if (nombre.trim() === "") {
                                setError("El nombre está vacío");
                            }
                        }}
                    />
                    {mensaje && <p className="mensaje-enter">{mensaje}</p>}
                    {error && <span className="error-nombre">{error}</span>}
                </div>

                <div className="form-group">
                    <p>Correo Electronico</p>
                    <input
                        type="email"
                        id="mail"
                        placeholder="tuemail@mail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)}>
                    {visible && <div>Click para enviar los datos</div>}
                    <button type="submit">Enviar</button>
                </div>
            </form>
        </main>
    );
};

export { Forms };