import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, addDoc, updateDoc, query, where } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB-ih-gRpy_2qn41hojkeEogbANtr3nwqo",
  authDomain: "almendrapastelera.firebaseapp.com",
  projectId: "almendrapastelera",
  storageBucket: "almendrapastelera.appspot.com",
  messagingSenderId: "560382929606",
  appId: "1:560382929606:web:1a4287013fa0cc666f45c7"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const getProducts = async () => {
    const productsCollectionRef = collection(db, "products");
    const snapshot = await getDocs(productsCollectionRef);
    const docsData = snapshot.docs.map(doc => {
        return { ...doc.data(), id: doc.id }
    });
    return docsData;
};

export const getProductByCategory = async (category) => {
    const productsCollectionRef = collection(db, "products");
    const q = query(productsCollectionRef, where("category", "==", category));
    const snapshot = await getDocs(q);
    const docsData = snapshot.docs.map(doc => {
        return { ...doc.data(), id: doc.id }
    });
    return docsData;
};

export const getOneProduct = async (idToSearch) => {
    const productRef = doc(db, "products", idToSearch);
    const snapshot = await getDoc(productRef);
    return { ...snapshot.data(), id: snapshot.id };
};

export const createBuyOrder = async (order) => {
    const ordersCollectionRef = collection(db, "orders");
    const orderDoc = await addDoc(ordersCollectionRef, order);

    // Reducir el stock de los productos comprados
    const productsToUpdate = order.items.map(item => {
        return { id: item.id, quantity: item.quantity };
    });

    await Promise.all(productsToUpdate.map(async (product) => {
        const productRef = doc(db, "products", product.id);
        const productDoc = await getDoc(productRef);
        if (!productDoc.exists()) {
            throw new Error("No se encontró el producto");
        }

        const productData = productDoc.data();
        const newStock = productData.stock - product.quantity;

        if (newStock < 0) {
            throw new Error(`Stock insuficiente para el producto ${productData.name}`);
        }

        await updateDoc(productRef, { stock: newStock });
    }));

    return orderDoc.id;
};


/* export const exportMyData = async (data) => {
    const productsCollectionRef = collection(db, "products");

    try {
        await Promise.all(data.map(async (prod) => {
            const docRef = await addDoc(productsCollectionRef, prod);
            console.log("Documento creado:", docRef.id);
        }));
    } catch (error) {
        console.error("Error al exportar datos:", error);
    }
};

*/ 