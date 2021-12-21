import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail"

function ItemDetailContainer() {

    const getItem = () => {
        return new Promise((resolve, reject) => {
            setTimeout(
                () =>
                    resolve({ id: 1, title: "Remera", description: "Remera entrenamiento", price: 200 }), 2000);
        })
    }

    const [producto, setProducto] = useState({});

    useEffect(() => {
        getItem().then((data) => {
            setProducto(data)
        })
    }, [])

    return (
        <div>
            <ItemDetail item={producto} />)
        </div>
    )
}

export default ItemDetailContainer
