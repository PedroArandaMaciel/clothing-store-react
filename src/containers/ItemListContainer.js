import ItemCount from "../components/ItemCount";
import '../index.css'
import ItemList from '../components/ItemList'

const ItemListContainer = (props) => {
    return (
        <div>
            <p>{props.greeting}</p>
            <ItemCount />
            <ItemList/>
        </div>
    )
}

export default ItemListContainer;