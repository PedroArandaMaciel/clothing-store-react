import ItemCount from "./ItemCount";
import '../index.css'

const ItemListContainer = (props) => {
    return(
        <div>
            <p>{props.greeting}</p>
            <ItemCount/>
        </div>
    )
}

export default ItemListContainer;