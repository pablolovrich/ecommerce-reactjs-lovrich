import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";


function ItemListContainer({ nombre, apellido }) {

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
      {productos.length === 0 ? (<h2>Cargando lista de productos...</h2>) : (<ItemList items={productos} />)}
    </>
  );
}

export default ItemListContainer;
