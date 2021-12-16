import Item from "./Item"

function ItemList({ items }) {
    return (
        <>
            <ul>
                {items.map((producto) => (
                    <Item item={producto} key={producto.id} />
                ))}
            </ul>
        </>
    )
}

export default ItemList


