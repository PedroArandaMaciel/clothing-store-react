import { CartContext } from "./CartContext";
import { useContext } from "react";
const OrderSummary = () => {
    const { clear, calcularPrecioTotal } = useContext(CartContext);
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
                        <button className="btn btn-primary">Finalizar compra</button>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default OrderSummary;