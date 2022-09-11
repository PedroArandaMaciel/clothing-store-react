import CartWidget from "../components/CartWidget.js";

const Navbar = () => {
    return(
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
             <a className="nav-link" href="/#">Todos los productos</a>
             <a className="nav-link" href="/#">Remeras</a>
             <a className="nav-link" href="/#">Buzos</a>
             <a className="nav-link" href="/#">Buzos sin capucha</a>
           </div>
         </div>
         <div className="d-flex">
              <a className="nav-link" href="/#">Login</a>
              <a className="nav-link" href="/#">Register</a>
             </div>
         </div>
         <CartWidget />
         </nav>
       </div>
    );
}

export default Navbar;