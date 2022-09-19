import { useState, useEffect } from "react";
import CustomFetch from "../utilities/CustomFetch";
import productosDB from "../utilities/products";
import ItemDetail from "../components/ItemDetail";
import spinnLoading from "../components/SpinnLoading";
import { useParams } from "react-router-dom";
const ItemDetailContainer = () => {
    const [dato, setDato] = useState({})
    const [loading, setLoading] = useState(false)
    const { id } = useParams();

    useEffect(() => {
        setLoading(true)
        CustomFetch(2000, productosDB.find(item => item.id == id))
            .then(result => setDato(result))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, [id]);

    return (
        <div className="divContainerItem">
            {loading ? <div className="centrarSpinn">{spinnLoading()}</div> : <ItemDetail item={dato} />}
        </div>
    )
}
export default ItemDetailContainer;