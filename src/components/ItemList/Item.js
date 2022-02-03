import { Link } from "react-router-dom"

function Item({ item }) {

    return (
        <article className="bg-white rounded-lg shadow-2xl w-auto h-auto relative">
            <img src={item.img} alt="ropa" className="rounded-t-lg h-60 w-full object-cover" />
            <div className="p-8 text-center">
                <h2 className="text-xl font-extrabold mb-5">{item.title}</h2>
                <p className="font-semibold	">${item.price}</p>
                <button className="bg-gray-500 text-gray-50 rounded-lg py-2 px-4 mt-5 mb-5">
                    <Link to={`/item/${item.id}`}>Ver detalle</Link>
                </button>
            </div>
            <div className="bg-gray-100 rounded-b-lg text-right py-3 px-8 text-xs text-gray-500 absolute inset-x-0 bottom-0">
                Stock Disponible
            </div>
        </article>
    )
}

export default Item
