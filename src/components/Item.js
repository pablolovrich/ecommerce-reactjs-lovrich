import { Link } from "react-router-dom"

function Item({ item }) {

    return (
        <article className="card">
            <img src={item.img} alt="ropa" />
            <h3>{item.title}</h3>
            <p>{item.price}</p>
            <Link to={`/item/${item.id}`}>Ver detalle</Link>
        </article>
    )
}

export default Item
