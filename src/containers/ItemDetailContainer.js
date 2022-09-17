import { useState, useEffect } from "react";
import CustomFetch from "../utilities/CustomFetch";
import productosDB from "../utilities/products";
import ItemDetail from "../components/ItemDetail";
import spinnLoading from "../components/SpinnLoading";
const ItemDetailContainer = () => {
    const [dato, setDato] = useState({})
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        CustomFetch(2000, productosDB[0])
            .then(result => setDato(result))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, []);

    return (
        <div className="divContainerItem">
            {loading ? <div className="centrarSpinn">{spinnLoading()}</div> : <ItemDetail item={dato} />}
        </div>
    )
}
export default ItemDetailContainer;