import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/NavBar";


function App() { 
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting="Hello React components"/>
    </div>
  );
}

export default App;
