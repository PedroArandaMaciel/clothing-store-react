/* import ItemListContainer from "./containers/ItemListContainer"; */
import Navbar from "./components/NavBar";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import ItemListContainer from "./containers/ItemListContainer"
import Cart from "./components/Cart";
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() { 
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer/>} />
          <Route path="/category/:id" element={<ItemListContainer/>} />
          <Route path="/item/:id" element={<ItemDetailContainer/>}/>
          <Route path="/cart" element={<Cart/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
