import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
function Item({ producto }) {
    return (
        <div className="col cardProduct">
            <div className="card h-100 divCardProduct">
                <img src={producto.imagen} className="card-img-top img-thumbnail imgProducts" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{producto.name} color {producto.color}</h5>
                    <p className="card-text">Talle: {producto.talle}</p>
                    <p className="card-text">Precio: ${producto.price}</p>
                    <div className="divBtnCardProduc">
                        <Link to={"/item/" + producto.id} className="btn btn-info">Ver detalle del producto</Link>
                    </div>
                    <div className="card-footer">Con {producto.stock} unidades en Stock</div>
                </div>
                <ItemCount />
            </div>
        </div>
    )
}
export default Item;