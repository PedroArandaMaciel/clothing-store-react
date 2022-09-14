import Item from '../components/Item'
import productosDB from '../utilities/products'
import CustomFetch from '../utilities/CustomFetch';
import {useState} from 'react'
function ItemList() {
    const [products, setProducto] = useState([]);

    CustomFetch(2000, productosDB)
    .then(result => setProducto(result))
    .catch(err => console.log(err))
    return (
        <div className="row row-cols-1 row-cols-md-6 g-4 containerItems">
            {products.map(item => (
                <Item
                    key={item.id}
                    name={item.name}
                    color={item.color}
                    talle={item.talle}
                    stock={item.stock}
                    precio={item.price}
                    img={item.imagen}
                />
            ))}
        </div>
    )
}
export default ItemList;