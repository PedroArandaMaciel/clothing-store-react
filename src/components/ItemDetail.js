import { useContext, useState } from "react"
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import ItemCount from "./ItemCount"
const ItemDetail = ({ item }) => {
    const [itemCount, setItemCount] = useState(0);
    const { addItem } = useContext(CartContext)

    const onAdd = (cantidad) => {
        setItemCount(cantidad)
        addItem(item, cantidad)
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <img src={item.imagen} className="img-thumbnail imgDetail" alt="..." />
                </div>
                <div className="col-4 p-2">
                    <div>
                        <h4>{item.name} color {item.color}</h4>
                    </div>
                    <div>
                        <h4>${item.price}</h4>
                    </div>
                    <div>
                        <p className="descripcionItemDetail">{item.descripcion}</p>
                    </div>
                </div>
                <div className="col-4 d-flex align-items-end">
                    {
                        itemCount === 0
                            ? <ItemCount initial={1} stock={item.stock} inCard={item.inCard} onAdd={onAdd} />
                            : <Link to="/cart"><button className="btn btn-dark">Terminar mi compra</button></Link>
                    }
                </div>
                <div className="col-12">
                    <p className="parrafoStockDetail">Contamos con un stock de {item.stock} unidades</p>
                </div>

            </div>
        </div>
    )
}
export default ItemDetail