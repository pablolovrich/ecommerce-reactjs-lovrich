import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { db } from "../../firebase";
import { getDocs, collection, query, where } from "firebase/firestore"

function ItemListContainer({ greeting }) {

  const { categoryId } = useParams();

  const [productos, setProductos] = useState([]);

  useEffect(() => {

    const productsCollection = collection(db, "products")
    const consulta = categoryId !== undefined ? query(productsCollection, where("category", "==", categoryId)) : null;
    const docs = categoryId !== undefined ? getDocs(consulta) : getDocs(productsCollection);

    docs
      .then(({ docs }) => {
        setProductos(docs.map((doc) => ({ id: doc.id, ...doc.data() })))
      })
      .catch((error) => {
        console.log(error)
      })
  }, [categoryId])

  return (
    <>
      <h2 className="text-2xl font-bold mt-12 text-center">{greeting}</h2>
      {productos.length === 0 ? (<h2 className="my-16 text-2xl text-center font-bold">Cargando lista de productos...</h2>) : (<ItemList items={productos} />)}
    </>
  );
}

export default ItemListContainer;
