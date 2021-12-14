import React from "react";
import ItemCount from "./ItemCount";

function ItemListContainer({ nombre, apellido }) {
  function onAdd() {
    console.log("Se agregaron los productos al carrito");
  }

  return (
    <div>
      <h2>
        ¡Bienvenido {nombre} {apellido}! Comienza a comprar
      </h2>
      <ItemCount stock={5} initial={1} onAdd={onAdd} />
    </div>
  );
}

export default ItemListContainer;