import '../index.css'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import ItemList from '../components/ItemList'
import spinnLoading from '../components/SpinnLoading';
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from '../utilities/fireBaseConfig';

const ItemListContainer = () => {
    const [products, setProducto] = useState([]);
    const [loading, setLoading] = useState(false);
    const { id } = useParams();
    useEffect(() => {
        setLoading(true)
        const firestoreFetch = async () => {
            let q
            if (id) {
                q = query(collection(db, "products"), where('categoryId', '==', parseInt(id)))
            } else {
                q = query(collection(db, "products"))
            }
            const querySnapshot = await getDocs(q);
            const dataFromFirestore = querySnapshot.docs.map(document => ({
                id: document.id,
                ...document.data()
            }))
            setLoading(false)
            return dataFromFirestore
        }
        firestoreFetch()
            .then(result => setProducto(result))
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