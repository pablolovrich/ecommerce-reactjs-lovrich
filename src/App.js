import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banner from "./components/ItemList/Banner";
import Cart from "./components/Cart/Cart";
import CustomProvider from "./components/Cart/CartContext";
import Dropdown from "./components/Header/Dropdown";
import Footer from "./components/Footer/Footer";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import NavBar from "./components/Header/NavBar";
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
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="¡Bienvenido, comienza a comprar!" />} />
          <Route path="/category/:categoryId" element={<ItemListContainer greeting="¡Bienvenido, comienza a comprar!" />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CustomProvider>
  );
}

export default App;
