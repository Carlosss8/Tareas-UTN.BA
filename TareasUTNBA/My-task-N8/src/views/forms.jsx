import "../styles/forms.css";

const Forms = () => {
    return (
        <main className="contacto-container">
            <form className="contacto-form">
                <h2>Contacto</h2>

                <div className="form-group">
                    <p>Nombre</p>
                    <input
                        type="text"
                        id="name"
                        placeholder="Tu nombre"
                    />
                </div>

                <div className="form-group">
                    <p>Correo Electronico</p>
                    <input
                        type="email"
                        id="mail"
                        placeholder="tuemail@mail.com"
                    />
                </div>

                <button type="submit">Enviar mensaje</button>
            </form>
        </main>
    );
};

export { Forms };