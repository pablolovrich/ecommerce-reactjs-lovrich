import { useContexto } from "./CartContext"
import { Link } from "react-router-dom"

function Cart() {

    const { carrito, removeItem, clear, precio_total, sumItem, resItem } = useContexto()

    return (
        <>
            <h1>Carrito</h1>
            {carrito.length > 0 ? (<ul>
                {carrito.map((p) => (
                    <li key={p.id}>
                        Producto:{p.title} Precio: ${p.price} <button onClick={() => { resItem(p.id, p.price) }}>-</button>Cantidad:{p.cantidad}<button onClick={() => { sumItem(p.id, p.price, p.stock) }}>+</button>
                        <button onClick={() => { removeItem(p.id, p.cantidad, p.price) }}>Borrar Producto</button>
                    </li>
                ))}
                <h3>Precio total: ${precio_total}</h3>
                <button onClick={clear}>Vaciar Carrito</button>
            </ul>) :
                (<h2>El carrito está vacío <Link to="/">¡Comienza a comprar!</Link></h2>)}
        </>
    )
}

export default Cart
