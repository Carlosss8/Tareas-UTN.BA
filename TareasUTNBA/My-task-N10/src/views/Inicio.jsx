import { Link, useNavigate } from "react-router-dom";
import "../styles/Layout.css";
import "../styles/FormProduct.css";
import { addNewProducts, searchForId, updateProduct, deleteProduct } from "../services/productos.js"
import { useState, useEffect } from "react";
import { onSnapshot, collection, addDoc, getDocs, doc, updateDoc, getDoc, deleteDoc } from "firebase/firestore"
import { db } from "../config/firebase"

const Inicio = () => {

    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [addProduct, setAddProduct] = useState(null)
    const [searchId, setSearchId] = useState("")
    const [result, setResult] = useState(null)
    const [editingProduct, setEditingProduct] = useState(null)
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

    const resetForm = () => {
        setFormData({
            nombre: "",
            precio: "",
            imagen: "",
            descripcion: "",
            stock: ""
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await addNewProducts(formData)
        setFormData({ nombre: "", precio: "", imagen: "", descripcion: "", stock: "" })
        resetForm()
    }

    const handleUpdate = async (e) => {
        e.preventDefault()
        await updateProduct(editingProduct, formData)
        setEditingProduct(null)
        resetForm()
    }

    const handleSearch = async () => {
        const producto = await searchForId(searchId)
        setResult(producto)
    }

    const handleDeleteProduct = async (id) => {
        try {
            const idDeletedProduct = await deleteProduct(id)
            alert(`Producto id: ${idDeletedProduct} borrado con éxito`)
            const filteredProducts = products.filter(p => p.id !== id)
            setProducts(filteredProducts)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <main>
            <h2>Agregar Producto</h2>
            <section className="form-input">
                <form className="form-product" onSubmit={editingProduct ? handleUpdate : handleSubmit}>
                    <div className="form-group">
                        <input
                            name="nombre"
                            type="text"
                            placeholder="Titulo"
                            required
                            value={formData.nombre}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <input
                            name="precio"
                            type="number"
                            placeholder="Precio"
                            required
                            value={formData.precio}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            name="imagen"
                            type="text"
                            placeholder="URL image"
                            required
                            value={formData.imagen}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <textarea
                            name="descripcion"
                            type="text"
                            placeholder="Descripción"
                            required
                            value={formData.descripcion}
                            onChange={handleChange}
                        >
                        </textarea>
                    </div>
                    <div className="form-group">
                        <input
                            name="stock"
                            type="number"
                            placeholder="Stock"
                            required
                            value={formData.stock}
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit">
                        {editingProduct ? "Actualizar" : "Agregar"}
                    </button>
                </form>
            </section>

            <div>
                <h2></h2>

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
                        <div>
                            <button onClick={() => {
                                setEditingProduct(p.id)
                                setFormData(p)
                            }}>
                                Editar
                            </button>
                        </div>
                        <button onClick={() => handleDeleteProduct(p.id)}>Borrar</button>
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