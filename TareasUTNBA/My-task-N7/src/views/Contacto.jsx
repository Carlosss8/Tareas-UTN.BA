import "../styles/Contacto.css";

const Contacto = () => {
    return (
        <main className="contacto-container">
            <form className="contacto-form">
                <h2>Contacto</h2>

                <div className="form-group">
                    <label htmlFor="name">Nombre</label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Tu nombre"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="mail">Correo electrónico</label>
                    <input
                        type="email"
                        id="mail"
                        placeholder="tuemail@mail.com"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="msg">Mensaje</label>
                    <textarea
                        id="msg"
                        rows="4"
                        placeholder="Escribí tu mensaje..."
                    ></textarea>
                </div>

                <button type="submit">Enviar mensaje</button>
            </form>
        </main>
    );
};

export { Contacto };