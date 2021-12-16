import React from "react";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <header>
      <h1 className="logo">TIENDA DEPORTES</h1>
      <nav>
        <ul className="nav-links">
          <li>
            <a href="#">Hombres</a>
          </li>
          <li>
            <a href="#">Mujeres</a>
          </li>
          <li>
            <a href="#">Niños</a>
          </li>
        </ul>
      </nav>
      <CartWidget />
    </header>
  );
};

export default NavBar;
