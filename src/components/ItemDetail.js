import ItemCount from "./ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useContexto } from "./CartContext";

function ItemDetail({ item }) {

    const { addItem } = useContexto()
    const [mostrar, setmostrar] = useState(true)

    function onAdd(cantidad) {
        console.log("Se agregaron " + cantidad + " productos al carrito");
        setmostrar(false)
        addItem(cantidad, item)
    }

    if (mostrar) {
        return (
            <div className="detalle">
                <h3>Detalle del producto</h3>
                <img src={item.img} alt="ropa" />
                <p>Producto: {item.title} <br />
                    Precio: $ {item.price} <br />
                    Descripción: {item.description}</p>
                <ItemCount stock={5} initial={1} onAdd={onAdd} />
            </div>)
    } else {
        return (
            <div className="detalle">
                <h3>Detalle del producto</h3>
                <img src={item.img} alt="ropa" />
                <p>Producto: {item.title} <br />
                    Precio: $ {item.price} <br />
                    Descripción: {item.description}</p>
                <Link to={"/cart"}>Finalizar compra</Link>
            </div>)
    }
}

export default ItemDetail
