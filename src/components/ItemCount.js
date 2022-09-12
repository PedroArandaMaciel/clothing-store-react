import { useState } from 'react';
import '../index.css'
function ItemCount() { 
    const [rate, setRate] = useState(1);
    let stock = 10;

   const addProduct = () => {
    if(rate < stock){
        setRate(rate+1);
    }else{
        alert(`No hay stock, disponemos solo de ${stock} unidades. Disculpe las molestias`)
    }
   }
   const agregarCarrito = () => {
    if(rate !== 0){
        alert(`Se agrego al carrito ${rate} productos`)
        setRate(1);
    }
   }
   const removeProduct = () => {
    if(rate >= 1){
        setRate(rate-1);
    }else{
        alert("Pedido no valido, por favor ingrese valores positivos")
    }
   }
    return (
      <div className='componentCantAgregar'>
        <p>Buzo color negro</p>
        <div className='containerCantidadAgregada'>
            <button onClick={removeProduct} className="btnCantidadAgregada">-</button>
            <span className="spanCantidadAgregada">{rate}</span>
            <button onClick={addProduct} className="btnCantidadAgregada">+</button>
        </div>
        <div>
            <button onClick={agregarCarrito} className='btnAgregarCarrito'>Agregar al Carrito</button>
        </div>
      </div>
    );
}

export default ItemCount;
  