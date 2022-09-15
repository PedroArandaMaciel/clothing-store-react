import Item from '../components/Item'
const ItemList = ({productos}) => {
    return (
        <div className="row row-cols-1 row-cols-md-6 g-4 containerItems">
            {productos.map( (products) => <Item key={products.id} producto={products}/>)}
        </div>
    )
}
export default ItemList;