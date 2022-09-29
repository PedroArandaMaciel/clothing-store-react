// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAHNw77c1iBj4cSpy93sBCbAWaJOszESkU",
    authDomain: "clothing-store-react-33638.firebaseapp.com",
    projectId: "clothing-store-react-33638",
    storageBucket: "clothing-store-react-33638.appspot.com",
    messagingSenderId: "717567501631",
    appId: "1:717567501631:web:11959d728d218348305f8a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)


// cargar la data automaticamente a firestore
//async function cargarBaseDeDatos() {
//    const productos = productosDB
//    productos.forEach(async (producto) => {
//        await addDoc(collection(db, "products"), {
//            cantidadSeleccionada: producto.cantidadSeleccionada,
//            name: producto.name,
//            categoryId: producto.categoryId,
//            color: producto.color,
//            talle: producto.talle,
//            stock: producto.stock,
//            price: producto.price,
//            imagen: producto.imagen,
//            descripcion: producto.descripcion
//        })
//    })
//}

