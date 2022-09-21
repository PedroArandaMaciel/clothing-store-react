import Item from '../components/Item'
const ItemList = ({ productos }) => {
    return (
        <div className="row row-cols-1 row-cols-md-6 g-4 containerItems">
            {productos.map((product) => <Item key={product.id} producto={product} />)}
        </div>
    )
}
export default ItemList;