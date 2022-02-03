import { createContext, useContext, useState } from "react";

const contexto = createContext();

export const { Provider } = contexto

export const useContexto = () => {
    return useContext(contexto)
}

const CustomProvider = ({ children }) => {
    const [cantidad_total, setCantidad_total] = useState(0)
    const [precio_total, setPrecio_total] = useState(0)
    const [carrito, setCarrito] = useState([])

    const addItem = (cantidad, item) => {
        if (isInCart(item.id)) {
            let producto_en_carrito = carrito.find(p => p.id === item.id)
            producto_en_carrito.cantidad += cantidad
            setCarrito([...carrito])
        } else {
            const copia_item = { ...item }
            copia_item.cantidad = cantidad
            setCarrito([...carrito, copia_item])
        }
        setCantidad_total(cantidad_total + cantidad)
        setPrecio_total(precio_total + (cantidad * item.price))
    }

    const removeItem = (itemId, cantidad, precio) => {
        setCarrito(carrito.filter(p => p.id !== itemId))
        setCantidad_total(cantidad_total - cantidad)
        setPrecio_total(precio_total - (cantidad * precio))
    }

    const clear = () => {
        setCarrito([])
        setCantidad_total(0)
        setPrecio_total(0)
    }

    const isInCart = (id) => {
        return carrito.find(p => p.id === id) ? (true) : (false)
    }

    const sumItem = (id, precio, stock) => {
        let producto_modificar = carrito.find(p => p.id === id)
        producto_modificar.cantidad += 1
        setCarrito([...carrito])
        setCantidad_total(cantidad_total + 1)
        setPrecio_total(precio_total + (precio))
    }

    const resItem = (id, precio) => {
        let producto_modificar = carrito.find(p => p.id === id)
        if (producto_modificar.cantidad >= 2) {
            producto_modificar.cantidad -= 1
            setCarrito([...carrito])
            setCantidad_total(cantidad_total - 1)
            setPrecio_total(precio_total - (precio))
        }
    }

    const valorDelContexto = {
        precio_total,
        cantidad_total,
        carrito,
        sumItem,
        resItem,
        addItem,
        removeItem,
        clear
    }

    return (
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
}

export default CustomProvider