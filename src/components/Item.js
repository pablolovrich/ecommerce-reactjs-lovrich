function Item({ item }) {

    return (
        <>
            <li>
                <h3>{item.title}</h3>
                <p>{item.price}</p>
                <button>Ver mas detalles</button>
            </li>
        </>
    )
}

export default Item
