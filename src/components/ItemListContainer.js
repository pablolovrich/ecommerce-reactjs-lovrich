import React, { useState, useEffect } from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";


function ItemListContainer({ nombre, apellido }) {
  function onAdd(cantidad) {
    console.log("Se agregaron " + cantidad + " productos al carrito");
  }

  const promiseItems = () => {
    return new Promise((resolve, reject) => {
      setTimeout(
        () =>
          resolve([
            { id: 1, title: "Remera", description: "Remera entrenamiento", price: 200 },
            { id: 2, title: "Campera", description: "Campera entrenamiento", price: 500 },
            { id: 3, title: "Pantalon", description: "Pantalon entrenamiento", price: 300 }
          ]), 2000);
    })
  }

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    promiseItems().then((data) => {
      setProductos(data)
    })
  }, [])

  return (
    <>
      <h2>
        ¡Bienvenido {nombre} {apellido}! Comienza a comprar
      </h2>
      <ItemCount stock={5} initial={1} onAdd={onAdd} />
      {productos.length === 0 ? (<h2>Cargando...</h2>) : (<ItemList items={productos} />)}
    </>
  );
}

export default ItemListContainer;
