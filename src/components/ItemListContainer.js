import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { db } from "../firebase";
import { getDocs, collection, query, where } from "firebase/firestore"

function ItemListContainer({ greeting }) {

  const { categoryId } = useParams();

  const [productos, setProductos] = useState([]);

  useEffect(() => {

    const productsCollection = collection(db, "products")

    if (categoryId) {

      const consulta = query(productsCollection, where("category", "==", categoryId))
      getDocs(consulta)
        .then(({ docs }) => {
          setProductos(docs.map((doc) => ({ id: doc.id, ...doc.data() })))
        })
        .catch((error) => {
          console.log(error)
        })

    } else {

      getDocs(productsCollection)
        .then(({ docs }) => {
          setProductos(docs.map((doc) => ({ id: doc.id, ...doc.data() })))
        })
        .catch((error) => {
          console.log(error)
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
