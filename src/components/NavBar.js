import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import "./Navbar.css"

const NavBar = () => {
  return (
    <header className="navbar">
      <NavLink to="/">
        <h1 className="logo">TIENDA DEPORTES</h1>
      </NavLink>
      <nav>
        <ul className="nav-links">
          <li className="link">
            <NavLink to="/category/hombres">Hombres</NavLink>
          </li>
          <li className="link">
            <NavLink to="/category/mujeres">Mujeres</NavLink>
          </li>
          <li className="link">
            <NavLink to="/category/niños">Niños</NavLink>
          </li>
        </ul>
      </nav>
      <CartWidget />
    </header>
  );
};

export default NavBar;
