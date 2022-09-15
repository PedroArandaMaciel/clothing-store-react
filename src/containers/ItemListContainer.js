import { useState, useEffect } from 'react'
import ItemCount from "../components/ItemCount";
import '../index.css'
import ItemList from '../components/ItemList'
import productosDB from '../utilities/products'
import CustomFetch from '../utilities/CustomFetch';
import spinnLoading from '../components/SpinnLoading';
const ItemListContainer = (props) => {
    const [products, setProducto] = useState([]);
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        CustomFetch(2000, productosDB)
            .then(result => setProducto(result))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, []);
    return (
        <div>
            <p>{props.greeting}</p>
            <ItemCount />
            <div className="divContainerProducts">
                {loading ? spinnLoading() : <ItemList productos={products} />}
            </div>
        </div>
    )
}
export default ItemListContainer;