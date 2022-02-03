import React from "react";
import { useState } from "react";

function ItemCount({ stock, initial, onAdd }) {

  const [count, setCount] = useState(initial);

  function sumar() {
    if (count < stock) {
      setCount(count + 1);
    }
  }

  function restar() {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  function resetear() {
    if (count <= stock && count > 0) {
      onAdd(count)
      setCount(initial)
    }
  }

  return (
    <div className="flex flex-col justify-center items-center my-8">
      <div className="flex items-center justify-center">
        <button className="bg-gray-500 text-gray-50 rounded-lg py-2 px-4" onClick={restar}>-</button>
        <h2 className="mx-4 text-xl font-semi-bold">{count}</h2>
        <button className="bg-gray-500 text-gray-50 rounded-lg py-2 px-4" onClick={sumar}>+</button>
      </div>
      <button onClick={resetear} className="bg-gray-500 text-gray-50 rounded-lg py-2 px-4 mt-5">Agregar al carrito</button>
    </div >
  );
}

export default ItemCount;
