import { collection, getDocs } from "firebase/firestore"
import { db } from "../config/firebase";

const productCollection = collection(db, "products")

const getAllProducts = async () => {
    const snapshot = await getDocs(productCollection)
    return snapshot.docs
}

export { getAllProducts }