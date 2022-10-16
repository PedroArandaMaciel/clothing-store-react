import { createContext, useState } from "react";

export const CartContext = createContext();
const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([])

    const addItem = (product, cantidad) => {
        if (!isInCart(product.id)) {
            console.log(`Se agrego al carrito ${cantidad} productos`)
            product = {                                     //se genera nuevo obj para agregar nueva propiedad
                ...product, 
                cantidad: cantidad
            }
            setCartList([
                ...cartList,
                product
            ])
        } else {
            alert(`Producto ya en carrito, se agrego ${cantidad} extra`) 
            const p = cartList.find(item => item.id === product.id)  //buscar el obj con mismo id para editar su cantidad nueva
            p.cantidad += cantidad
            setCartList([...cartList])
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
        let index = cartList.map(item => item.cantidad)
        return index.reduce((valorPrevio, valorActual) => valorPrevio + valorActual, 0)
    }
    const calcularPrecioTotal = () => {
        let index = cartList.map(item => item.price * item.cantidad)
        return index.reduce((valorPrevio, valorActual) => valorPrevio + valorActual, 0)
    }
    return (
        <CartContext.Provider value={{ cartList, addItem, clear, removeItem, cantItems, calcularPrecioTotal }} >
            {children}
        </CartContext.Provider>
    )
}
export default CartContextProvider;