import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <footer className="flex p-10 w-full bg-black text-white justify-center items-center">
            <div className="flex justify-center items-center">
                <NavLink to="/" className="text-xl font-bold">TODO DEPORTES</NavLink>
            </div>
            <div className="flex flex-col justify-center items-center mx-32">
                <NavLink to="/category/hombres" className="p-4">Hombres</NavLink>
                <NavLink to="/category/mujeres" className="p-4">Mujeres</NavLink>
                <NavLink to="/category/niños" className="p-4">Niños</NavLink>
            </div>
            <div className="flex flex-col justify-center items-center text-2xl">
                <a href="#">
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="#">
                    <FontAwesomeIcon icon={faInstagram} className="my-8" />
                </a>
                <a href="#">
                    <FontAwesomeIcon icon={faWhatsapp} />
                </a>
            </div>
        </footer>
    )
};

export default Footer;