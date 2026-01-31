import { Link, useNavigate } from "react-router-dom";
import "../styles/Layout.css";
import { addNewProducts, searchForId } from "../services/productos.js"
import { useState, useEffect } from "react";
import { onSnapshot, collection } from "firebase/firestore"
import { db } from "../config/firebase"

const Inicio = () => {

    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [addProduct, setAddProduct] = useState(null)
    const [searchId, setSearchId] = useState("")
    const [result, setResult] = useState(null)
    const [formData, setFormData] = useState({
        nombre: "",
        precio: "",
        imagen: "",
        descripcion: "",
        stock: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }
    const handleNosotros = () => {
        navigate("/nosotros")
    }

    useEffect(() => {
        const colRef = collection(db, "products")

        const unsubscribe = onSnapshot(colRef, (snapshot) => {
            const data = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }))
            setProducts(data)
        })

        return () => unsubscribe()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const addProduct = await addNewProducts({
            nombre: formData.nombre,
            precio: Number(formData.precio),
            imagen: formData.imagen,
            descripcion: formData.descripcion,
            stock: formData.stock
        })
        setProducts([addProduct, ...products])

        setFormData({
            nombre: "",
            precio: "",
            imagen: "",
            descripcion: "",
            stock: ""
        })
    }

    const handleSearch = async () => {
        const producto = await searchForId(searchId)
        setResult(producto)
    }

    return (
        <main>
            <section>
                <h2>Agregar Producto</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        name="nombre"
                        type="text"
                        placeholder="Titulo"
                        required
                        value={formData.nombre}
                        onChange={handleChange}
                    />

                    <input
                        name="precio"
                        type="number"
                        placeholder="Precio"
                        required
                        value={formData.precio}
                        onChange={handleChange}
                    />

                    <input
                        name="imagen"
                        type="text"
                        placeholder="URL image"
                        required
                        value={formData.imagen}
                        onChange={handleChange}
                    />

                    <textarea
                        name="descripcion"
                        type="text"
                        placeholder="Descripción"
                        required
                        value={formData.descripcion}
                        onChange={handleChange}
                    >
                    </textarea>

                    <input
                        name="stock"
                        type="number"
                        placeholder="Stock"
                        required
                        value={formData.stock}
                        onChange={handleChange}
                    />
                    <button>{addProduct} Agregar </button>
                </form>
            </section>

            <div>
                <h2>Buscar producto</h2>

                {result && (
                    <div className="card-product">
                        <img src={result.imagen} />
                        <h3>{result.nombre}</h3>
                        <p>{result.descripcion}</p>
                    </div>
                )}
            </div>

            <ul className="card-list">
                {products.map(p => (
                    <div className="card-product" key={p.id}>
                        <img className="card-image" src={p.imagen} />
                        <h3>{p.nombre}</h3>
                        <p>{p.descripcion}</p>
                        <Link to={`/producto/${p.id}`} className="btn-VerMas">
                            VER MÁS
                        </Link>
                    </div>
                ))}
            </ul>

            <div className="contenido-nosotros">
                <button className="button-nosotros" onClick={handleNosotros}>
                    ¿Quienes somos?
                </button>
            </div>
        </main>
    )
}

export { Inicio }