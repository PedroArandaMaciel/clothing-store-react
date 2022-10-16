import { CartContext } from "./CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import OrderSummary from "./OrderSummary";
const Cart = () => {
    const { cartList, removeItem } = useContext(CartContext);
    return (
        <>
            {cartList.length !== 0
                ? <OrderSummary />
                : <div></div>
            }
            <div className="d-flex justify-content-center">
                <h3 className="p-3">
                    Carrito de compras
                </h3>
            </div>
            <div className="container-fluid d-flex justify-content-start">
                {
                    cartList.length !== 0
                        ? cartList.map(item => <div key={item.id}>
                            <img src={item.imagen} className="card-img-top img-thumbnail imgProducts" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{item.name} color {item.color}</h5>
                                <p className="card-text">{item.cantidad} item(s)</p>
                                <p className="card-text">Talle: {item.talle}</p>
                                <p className="card-text">Precio total: ${item.price * item.cantidad}</p>
                                <button onClick={() => removeItem(item.id)} className="btn btn-dark m-3">Remover Producto</button>
                            </div>
                        </div>)
                        : <div className="container mt-5 d-flex justify-content-center">
                            <h5>No hay productos en el carrito. Encontra lo que buscas desde el <Link to="/">HOME</Link></h5>
                        </div>
                }
            </div>

        </>
    )
}
export default Cart;