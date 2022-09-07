import './App.css';
function App() { 
  return (
    <div>
     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/#">Alcareto Clothing<img src="https://img.icons8.com/clouds/100/FA5252/jumper.png" alt='Icono de tienda'/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="/#">Home</a>
        <a className="nav-link" href="/#">Remeras</a>
        <a className="nav-link" href="/#">Buzos</a>
        <a className="nav-link" href="/#">Buzos sin capucha</a>
        <a className="nav-link" href="/#">Todos los productos</a>
      </div>
    </div>
  </div>
</nav>
  
    </div>
  );
}

export default App;
