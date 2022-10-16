import { CartContext } from "./CartContext";
import { useContext } from "react";
import { serverTimestamp, setDoc, doc, collection, updateDoc, increment } from "firebase/firestore";
import { db } from '../utilities/fireBaseConfig';
const OrderSummary = () => {
    const { clear, calcularPrecioTotal, cartList } = useContext(CartContext);

    const createOrder = async () => {
        let itemsForDB = cartList.map(item => ({
            id: item.id,
            price: item.price,
            title: item.name,
            quantity: item.cantidad
        }))

        let order = {
            buyer: {
                nombre: "Pedro",
                mail: "pedro123@gmail.com",
                phone: "12342375"
            },
            date: serverTimestamp(),
            items: itemsForDB,
            total: calcularPrecioTotal()
        }

        const newOrderRef = doc(collection(db, "orders"))
        await setDoc(newOrderRef, order);
        cartList.forEach(async (item) => {
            const itemRef = doc(db, "products", item.id)
            await updateDoc(itemRef, {
                stock: increment(-item.cantidad)
            })
        });
        clear()
        alert(`Tu orden fue creada! ID: ${newOrderRef.id}`)
    }
    return (
        <div>
            <div className="container d-flex justify-content-start">
                <button onClick={clear} className="btn btn-dark m-3">Limpiar Carrito</button>
            </div>
            <div className="container-fluid d-flex justify-content-end">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Resumen del pedido</h5>
                        <p className="card-text">Total: ${calcularPrecioTotal()}</p>
                        <button onClick={createOrder} className="btn btn-primary">Finalizar compra</button>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default OrderSummary;