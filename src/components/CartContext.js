import { createContext, useState } from "react";

export const CartContext = createContext();
const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([])

    const addItem = (product, cantidad) => {
        if (!isInCart(product.id)) {
            console.log(`Se agrego al carrito ${cantidad} productos`)
            product.cantidadSeleccionada = cantidad
            setCartList([
                ...cartList,
                product
            ])
        } else {
            console.log(`Producto ya en carrito, se agrego ${cantidad} extra`)
            product.cantidadSeleccionada += cantidad
        }
    }
    const clear = () => {
        setCartList([])
    }
    const isInCart = (id) => {
        if (cartList.find(item => item.id === id)) {
            return true
        } else {
            return false
        }
    }
    const removeItem = (itemId) => setCartList(cartList.filter((item) => item.id !== itemId))
    const cantItems = () => {
        let index = cartList.map(item => item.cantidadSeleccionada)
        return index.reduce((valorPrevio, valorActual) => valorPrevio + valorActual, 0)
    }
    const calcularPrecioTotal = () => {
        let index = cartList.map(item => item.price * item.cantidadSeleccionada)
        return index.reduce((valorPrevio, valorActual) => valorPrevio + valorActual, 0)
    }
    return (
        <CartContext.Provider value={{ cartList, addItem, clear, removeItem, cantItems, calcularPrecioTotal }} >
            {children}
        </CartContext.Provider>
    )
}
export default CartContextProvider;