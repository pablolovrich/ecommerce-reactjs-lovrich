import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = ({ toggle }) => {
  return (
    <header className="flex justify-between items-center h-16 bg-white text-black relative shadow-sm" role="navigation">
      <NavLink to="/" className="pl-8 text-xl font-bold">
        TODO DEPORTES
      </NavLink>
      <nav>
        <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </div>
        <div className="pr-8 md:block hidden">
          <NavLink to="/category/hombres" className="p-4">Hombres</NavLink>
          <NavLink to="/category/mujeres" className="p-4">Mujeres</NavLink>
          <NavLink to="/category/niños" className="p-4">Niños</NavLink>
          <CartWidget />
        </div>
      </nav>
    </header >
  );
};

export default NavBar;
