import ItemCount from "./ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useContexto } from "../Cart/CartContext";

function ItemDetail({ item }) {

    const { addItem } = useContexto()
    const [mostrar, setmostrar] = useState(true)

    function onAdd(cantidad) {
        setmostrar(false)
        addItem(cantidad, item)
    }

    return (
        <div className="bg-white rounded-lg shadow-2xl relative flex m-16">
            <img src={item.img} alt="ropa" className="rounded-t-lg object-cover h-auto" />
            <div className="p-8 text-center">
                <h2 className="text-3xl font-extrabold mb-5">{item.title}</h2>
                <p className="text-lg">{item.description}</p>
                <p className="text-2xl font-bold my-8">${item.price}</p>
                {(mostrar) ? (<ItemCount stock={10} initial={1} onAdd={onAdd} />)
                    : (<>
                        <button className="bg-gray-500 text-gray-50 rounded-lg py-2 px-4 mb-8 mr-2">
                            <Link to={"/"}>Seguir comprando</Link>
                        </button>
                        <button className="bg-gray-500 text-gray-50 rounded-lg py-2 px-4 mb-8 ml-2">
                            <Link to={"/cart"}>Finalizar compra</Link>
                        </button></>)}
                <p className="text-gray-500 text-left">ENVÍO GRATIS A PARTIR DE $11.999</p>
                <p className="text-gray-500 text-left">DEVOLUCIONES GRATIS ¿NO ES TU TALLE? PODÉS DEVOLVERLO EN UN PLAZO DE 60 DÍAS</p>
            </div>
            <div className="bg-gray-100 rounded-b-lg text-right py-3 px-8 text-xs text-gray-500 absolute inset-x-0 bottom-0">
                Stock Disponible
            </div>
        </div>)
}

export default ItemDetail
