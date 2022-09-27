import '../index.css'
import { CartContext } from "./CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
const CartWidget = () => {
    const { cantItems, cartList } = useContext(CartContext);
    return (
        <div>
            <Link to="/cart">
                <div className='containerIconCart'>
                    <div className='divSpanNumberCart'>
                        {
                            cartList.length !== 0
                                ? <span className='SpanNumberCart'>{cantItems()}</span>
                                : <span></span>
                        }
                    </div>
                    <div>
                        <img className='iconCarrito' src="https://img.icons8.com/clouds/100/000000/shopping-cart.png" alt="carrito de compras" />
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default CartWidget;