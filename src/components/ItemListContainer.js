import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

function ItemListContainer({ greeting }) {

  const { categoryId } = useParams();

  const promiseItems = () => {
    return new Promise((resolve, reject) => {
      setTimeout(
        () =>
          resolve([
            { id: 1, title: "Remera Hombre", description: "Remera entrenamiento hombre", price: 200, category: "hombres", img: "/remera.jpg" },
            { id: 2, title: "Campera Hombre", description: "Campera entrenamiento hombre", price: 500, category: "hombres", img: "/remera.jpg" },
            { id: 3, title: "Remera Mujer", description: "Remera entrenamiento mujer", price: 200, category: "mujeres", img: "/remera.jpg" },
            { id: 4, title: "Pantalon niño", description: "Pantalon entrenamiento niño", price: 300, category: "niños", img: "/remera.jpg" },
            { id: 5, title: "Buzo niño", description: "Buzo moda niño", price: 200, category: "niños", img: "/remera.jpg" }
          ]), 2000);
    })
  }

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    //console.log(categoryId)
    if (categoryId) {
      promiseItems().then((data) => {
        const dataFiltrada = data.filter((producto) => producto.category === categoryId)
        setProductos(dataFiltrada)
      })
    } else {
      promiseItems().then((data) => {
        setProductos(data)
      })
    }
  }, [categoryId])

  return (
    <>
      <h2>{greeting}</h2>
      {productos.length === 0 ? (<h2 className="cargando">Cargando lista de productos...</h2>) : (<ItemList items={productos} />)}
    </>
  );
}

export default ItemListContainer;
