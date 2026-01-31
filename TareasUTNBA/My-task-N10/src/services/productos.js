import { addDoc, collection, getDocs, doc } from "firebase/firestore"
import { db } from "../config/firebase";

const productCollection = collection(db, "products")

const getAllProducts = async () => {
    const snapshot = await getDocs(productCollection)
    return snapshot.docs
}

const addNewProducts = async (products) => {
    const docRef = await addDoc(productCollection, products)
    return {
        id: docRef.id,
        ...products
    }
}
const searchForId = async (id) => {
    const productCollection = doc(db, "products", id)
    const snapshot = await getDoc(productCollection)

    if (!snapshot.exists()) return null

    return {
        id: snapshot.id,
        ...snapshot.data()
    }
}


export { getAllProducts, addNewProducts, searchForId }
