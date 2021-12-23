import Item from "./Item"

function ItemList({ items }) {
    return (
        <div className="catalogo">
            {items.map((producto) => (
                <Item item={producto} key={producto.id} />
            ))}
        </div>
    )
}

export default ItemList


