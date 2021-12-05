import React from "react";


const NavBar = ()=> {
    return (
        <header>
            <h1 className="logo">TIENDA DEPORTES</h1>
            <nav>
                <ul className="nav-links">
                    <li><a href="#">Hombres</a></li>
                    <li><a href="#">Mujeres</a></li>
                    <li><a href="#">Niños</a></li>
                </ul>
            </nav>
            <a className="cta" href="#"><button>Login</button></a>
        </header>
    )
}

export default NavBar;