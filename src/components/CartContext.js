import { createContext, useContext, useState } from "react";

const contexto = createContext();

export const { Provider } = contexto

export const useContexto = () => {
    return useContext(contexto)
}

const CustomProvider = ({ children }) => {
    const [cantidad_total, setCantidad_total] = useState(0)
    const [carrito, setCarrito] = useState([])

    const addItem = (cantidad, item) => {
        if (isInCart(item.id)) {
            let producto_en_carrito = carrito.find(p => p.id === item.id)
            producto_en_carrito.cantidad += cantidad
            setCantidad_total(cantidad_total + cantidad)
            setCarrito([...carrito])
        } else {
            const copia_item = { ...item }
            copia_item.cantidad = cantidad
            setCarrito([...carrito, copia_item])
        }
    }

    const removeItem = (itemId) => {
        setCarrito(carrito.filter(p => p.id !== itemId))
    }

    const clear = () => {
        setCarrito([])
        setCantidad_total(0)
    }

    const isInCart = (id) => {
        return carrito.find(p => p.id === id) ? (true) : (false)
    }

    const valorDelContexto = {
        cantidad_total,
        carrito,
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