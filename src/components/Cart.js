import { CartContext } from "./CartContext";
import { useContext } from "react";
const Cart = () => {
    const { cartList, clear, removeItem } = useContext(CartContext);
    return (
        <>
            <div className="container d-flex justify-content-end">
                <button onClick={clear} className="btn btn-dark m-3">Limpiar Carrito</button>
            </div>
            <div className="d-flex justify-content-center">
                <h3>
                    Carrito de compras
                </h3>
            </div>
            <div className="container-fluid d-flex justify-content-start">
                {
                    cartList.map(item => <div key={item.id}>
                        <img src={item.imagen} className="card-img-top img-thumbnail imgProducts" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{item.name} color {item.color}</h5>
                            <p className="card-text">{item.cantidadSeleccionada} item(s)</p>
                            <p className="card-text">Talle: {item.talle}</p>
                            <p className="card-text">Precio total: ${item.price * item.cantidadSeleccionada}</p>
                            <button onClick={() => removeItem(item.id)} className="btn btn-dark m-3">Remover Producto</button>
                        </div>
                    </div>)
                }
            </div>

        </>
    )
}
export default Cart;