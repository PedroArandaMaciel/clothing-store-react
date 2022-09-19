import '../index.css'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import ItemList from '../components/ItemList'
import productosDB from '../utilities/products'
import CustomFetch from '../utilities/CustomFetch';
import spinnLoading from '../components/SpinnLoading';
const ItemListContainer = () => {
    const [products, setProducto] = useState([]);
    const [loading, setLoading] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        setLoading(true)
        if (id) {
            CustomFetch(2000, productosDB.filter(item => item.categoryId == id))
                .then(result => setProducto(result))
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
        } else {
            CustomFetch(2000, productosDB)
                .then(result => setProducto(result))
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
        }
    }, [id]);
    return (
        <div>
            <div className="divContainerProducts">
                {loading ? <div className="centrarSpinn">{spinnLoading()}</div> : <ItemList productos={products} />}
            </div>
        </div>
    )
}
export default ItemListContainer;