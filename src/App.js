//COMPONENTS
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//CSS
import "./App.css";
import Cart from "./components/Cart";

function App() {
  return (
    <BrowserRouter>

      <NavBar />

      <main>
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Bienvenido Usuario/a, comienza a comprar!" />} />
          <Route path="/category/:categoryId" element={<ItemListContainer greeting="Bienvenido Usuario/a, comienza a comprar!" />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>

    </BrowserRouter>
  );
}

export default App;
