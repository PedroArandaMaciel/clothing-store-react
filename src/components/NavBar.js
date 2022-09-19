import CartWidget from "../components/CartWidget.js";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Alcareto Clothing<img src="https://img.icons8.com/clouds/100/FA5252/jumper.png" alt='Icono de tienda' /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link" to="/">Todos los productos</Link>
              <Link className="nav-link" to="/category/3">Remeras</Link>
              <Link className="nav-link" to="/category/1">Buzos con capucha</Link>
              <Link className="nav-link" to="/category/2">Buzos sin capucha</Link>
            </div>
          </div>
          <div className="d-flex">
            <Link className="nav-link" to="/#">Login</Link>
            <Link className="nav-link" to="/#">Register</Link>
          </div>
        </div>
        <CartWidget />
      </nav>
    </div>
  );
}

export default Navbar;