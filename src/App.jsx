import Navbar from "./components/NavBar";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import ItemListContainer from "./containers/ItemListContainer"
import Cart from "./components/Cart";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CartContextProvider from "./components/CartContext";

function App() { 
  return (
    <CartContextProvider>
      <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer/>} />
            <Route path="/category/:id" element={<ItemListContainer/>} />
            <Route path="/item/:id" element={<ItemDetailContainer/>}/>
            <Route path="/cart" element={<Cart/>} />
          </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
