import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import CustomProvider from "./components/CartContext";
import Banner from "./components/Banner";
import Dropdown from "./components/Dropdown";
import { useState, useEffect } from "react";
import "./App.css";

function App() {

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false)
      }
    }
    window.addEventListener("resize", hideMenu)

    return () => {
      window.removeEventListener("resize", hideMenu)
    }
  })

  return (
    <CustomProvider>
      <BrowserRouter>
        <NavBar toggle={toggle} />
        <Dropdown isOpen={isOpen} toggle={toggle} />
        <Banner />
        <main>
          <Routes>
            <Route path="/" element={<ItemListContainer greeting="Bienvenido Usuario/a, comienza a comprar!" />} />
            <Route path="/category/:categoryId" element={<ItemListContainer greeting="Bienvenido Usuario/a, comienza a comprar!" />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>
      </BrowserRouter>
    </CustomProvider>
  );
}

export default App;
