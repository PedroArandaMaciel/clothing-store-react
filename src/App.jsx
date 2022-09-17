/* import ItemListContainer from "./containers/ItemListContainer"; */
import Navbar from "./components/NavBar";
import ItemDetailContainer from "./containers/ItemDetailContainer";

function App() { 
  return (
    <div>
      <Navbar />
      {/* <ItemListContainer greeting="Hello React components"/> */}
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
