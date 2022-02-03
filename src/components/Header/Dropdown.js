import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

const Dropdown = ({ isOpen, toggle }) => {
    return (
        <div className={isOpen ? "grid grid-rows-4 text-center items-center bg-black text-white" : "hidden"} onClick={toggle}>
            <NavLink to="/category/hombres" className="p-4">Hombres</NavLink>
            <NavLink to="/category/mujeres" className="p-4">Mujeres</NavLink>
            <NavLink to="/category/niños" className="p-4">Niños</NavLink>
            <CartWidget />
        </div>
    )
}

export default Dropdown