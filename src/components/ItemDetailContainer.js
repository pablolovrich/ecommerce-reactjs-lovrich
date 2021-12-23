import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom";

function ItemDetailContainer() {

    const { id } = useParams();

    const getItem = () => {
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

    const [producto, setProducto] = useState({});

    useEffect(() => {

        if (id) {
            getItem().then((data) => {
                const dataSeleccionada = data.find((producto) => producto.id == id)
                setProducto(dataSeleccionada)
            })
        }
    }, [id])

    return (
        <div>
            <ItemDetail item={producto} />
        </div>
    )
}

export default ItemDetailContainer
