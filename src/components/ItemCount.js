import React from "react";
import { useState } from "react";

function ItemCount({ stock, initial, onAdd }) {
  const [count, setCount] = useState(initial);

  function sumar() {
    if (count < stock) {
      setCount(count + 1);
    } else {
      console.log("No hay cantidad suficiente");
    }
  }

  function restar() {
    if (count > 1) {
      setCount(count - 1);
    } else {
      console.log("No se admite 0 cantidad");
    }
  }

  function resetear() {
    if (count <= stock && count > 0) {
      onAdd()
      setCount(initial)
    }
  }
  return (
    <div className="contadorContainer">
      <div className="topContador">
        <button onClick={restar}>-</button>
        <h2>{count}</h2>
        <button onClick={sumar}>+</button>
      </div>
      <button onClick={resetear}>Agregar al carrito</button>
    </div >
  );
}

export default ItemCount;
