import Item from "./Item"

function ItemList({ items }) {
    return (
        <main className="container mx-auto px-4 my-12">
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-rows-3 gap-x-32 gap-y-10">
                {items.map((producto) => (
                    <Item item={producto} key={producto.id} />
                ))}
            </section>
        </main>
    )
}

export default ItemList


