import { useState } from "react";
import "../styles/forms.css";

const Forms = () => {

    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [error, setError] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Datos enviados:', { nombre, email });
    };

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
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        onFocus={() => setError("")}
                        onBlur={() => {
                            if (nombre.trim() === "") {
                                setError("El nombre está vacío");
                            }
                        }}
                    />
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

                <button type="submit">Enviar mensaje</button>
            </form>
        </main>
    );
};

export { Forms };