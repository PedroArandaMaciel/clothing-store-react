import ItemListContainer from "./containers/ItemListContainer";
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
