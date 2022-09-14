import ItemCount from "./ItemCount";
function Item({ name, color, talle, stock, precio, img }) {
    return (
        <div className="col cardProduct">
            <div className="card h-100 divCardProduct">
                <img src={img} className="card-img-top img-thumbnail imgProducts" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name} color {color}</h5>
                    <p className="card-text">Talle: {talle}</p>
                    <p className="card-text">Precio: ${precio}</p>
                    <div className="divBtnCardProduc">
                        <button className="btn btn-info">Ver detalle del producto</button>
                    </div>
                    <div className="card-footer">Con {stock} unidades en Stock</div>
                </div>
                <ItemCount />
            </div>
        </div>
    )
}
export default Item;