import '../index.css'
import { Link } from "react-router-dom";
const CartWidget = () => {
    return (
        <div>
            <Link to="/cart">
            <div className='containerIconCart'>
                <div className='divSpanNumberCart'>
                    <span className='SpanNumberCart'>34</span>
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