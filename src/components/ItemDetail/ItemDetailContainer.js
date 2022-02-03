import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom";
import { db } from "../../firebase";
import { collection, doc, getDoc } from "firebase/firestore";

function ItemDetailContainer() {

    const { id } = useParams();

    const [producto, setProducto] = useState({});

    useEffect(() => {

        const productsCollection = collection(db, "products")
        const refDoc = doc(productsCollection, id)

        getDoc(refDoc)
            .then((res) => {
                setProducto({ id: res.id, ...res.data() })
            })
            .catch((error) => {
                console.log(error)
            })
    }, [id])

    return (
        <div>
            <ItemDetail item={producto} />
        </div>
    )
}

export default ItemDetailContainer
