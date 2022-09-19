import ItemCount from "./ItemCount"
const ItemDetail = ({ item }) => {
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
                    <ItemCount />
                </div>
                <div className="col-12">
                    <p className="parrafoStockDetail">Contamos con un stock de {item.stock} unidades</p>
                </div>

            </div>
        </div>
    )
}
export default ItemDetail