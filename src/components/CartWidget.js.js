import '../index.css'
const CartWidget = () => {
    return(
        <div>
            <div className='containerIconCart'>
                <div className='divSpanNumberCart'>
                    <span className='SpanNumberCart'>3</span>
                 </div>
                 <div>
                     <img className='iconCarrito' src="https://img.icons8.com/clouds/100/000000/shopping-cart.png" alt="carrito de compras" />
                 </div>
             </div>
        </div>
    )
}

export default CartWidget;