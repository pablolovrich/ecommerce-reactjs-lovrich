import ItemCount from "./ItemCount";

function ItemDetail({ item }) {
    function onAdd(cantidad) {
        console.log("Se agregaron " + cantidad + " productos al carrito");
    }
    return (

        <div className="detalle">
            <h3>Detalle del producto</h3>
            <img src={item.img} alt="ropa" />
            <p>Producto: {item.title} <br />
                Precio: $ {item.price} <br />
                Descripción: {item.description}</p>
            <ItemCount stock={5} initial={1} onAdd={onAdd} />
        </div>)
}

export default ItemDetail
