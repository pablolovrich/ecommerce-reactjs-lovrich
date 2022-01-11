import { useContexto } from "./CartContext"

function Cart() {

    const { carrito, removeItem, clear } = useContexto()

    return (
        <>
            <ul>
                {carrito.map((p) => (
                    <li key={p.id}>
                        Producto:{p.title} Precio:{p.price} Cantidad:{p.cantidad}
                        <button onClick={() => { removeItem(p.id) }}>Borrar Producto</button>
                    </li>
                ))}
            </ul>
            <button onClick={clear}>Vaciar Carrito</button>
        </>
    )
}

export default Cart
