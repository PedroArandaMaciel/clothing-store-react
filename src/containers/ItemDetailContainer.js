import { useState, useEffect } from "react";
import ItemDetail from "../components/ItemDetail";
import spinnLoading from "../components/SpinnLoading";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from '../utilities/fireBaseConfig';
const ItemDetailContainer = () => {
    const [dato, setDato] = useState({})
    const [loading, setLoading] = useState(false)
    const { id } = useParams();

    useEffect(() => {
        setLoading(true)
        const docFetch = async () => {
            const docRef = doc(db, "products", id);
            const docSnap = await getDoc(docRef);
            setDato(docSnap.data())
            setLoading(false)
        }
        docFetch()
    }, [id]);

    return (
        <div className="divContainerItem">
            {loading ? <div className="centrarSpinn">{spinnLoading()}</div> : <ItemDetail item={dato} />}
        </div>
    )
}
export default ItemDetailContainer;