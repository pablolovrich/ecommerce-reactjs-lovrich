import { useContexto } from "./CartContext"
import { Link } from "react-router-dom"
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from "../../firebase"

function Cart() {

    const { carrito, removeItem, clear, precio_total, sumItem, resItem } = useContexto()

    const finalizarCompra = () => {
        console.log("Guardando la compra en la db...")
        const ventasCollection = collection(db, "ventas")
        addDoc(ventasCollection, {
            buyer: {
                name: "Nombre del comprador",
                phone: "Teléfono",
                email: "email@email.com"
            },
            items: {
                carrito
            },
            date: serverTimestamp(),
            total: precio_total
        })
            .then((res) => {
                console.log(res)
            })
        clear()
    }

    return (
        <div className="container mx-auto my-12">
            <h1 className="text-2xl font-bold mb-4">Tu Carrito</h1>
            {carrito.length > 0 ? (<>
                {carrito.map((p) => (
                    <div key={p.id} className="w-1/4 p-4 my-4 bg-white rounded-lg shadow-2xl">
                        <h2 className="font-bold my-2 text-lg">{p.title}</h2>
                        <button className="bg-gray-500 text-gray-50 rounded-lg py-2 px-4 mr-4" onClick={() => { resItem(p.id, p.price) }}>
                            -
                        </button>
                        {p.cantidad}
                        <button className="bg-gray-500 text-gray-50 rounded-lg py-2 px-4 ml-4" onClick={() => { sumItem(p.id, p.price, p.stock) }}>
                            +
                        </button>
                        <button className="bg-gray-500 text-gray-50 rounded-lg py-2 px-4 ml-4" onClick={() => { removeItem(p.id, p.cantidad, p.price) }}>
                            Borrar Producto
                        </button>
                        <p className="my-2 text-lg">x ${p.price}</p>
                    </div>
                ))}
                <h3 className="mt-12 mb-8 text-lg font-bold">Precio total: ${precio_total}</h3>
                <button className="bg-gray-500 text-gray-50 rounded-lg py-2 px-4 mr-4" onClick={clear}>
                    Vaciar Carrito
                </button>
                <button className="bg-gray-500 text-gray-50 rounded-lg py-2 px-4" onClick={finalizarCompra}>
                    Finalizar compra
                </button>
            </>) :
                (<h2 className="text-xl">El carrito está vacío <Link to="/" className="font-bold">¡Comienza a comprar!</Link></h2>)}
        </div>
    )
}

export default Cart
