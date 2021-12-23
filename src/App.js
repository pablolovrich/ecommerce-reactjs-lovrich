//COMPONENTS
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//CSS
import "./App.css";

function App() {
  return (
    <BrowserRouter>

      <NavBar />

      <main>
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Bienvenido Usuario/a, comienza a comprar!" />} />
          <Route path="/category/:categoryId" element={<ItemListContainer greeting="Bienvenido Usuario/a, comienza a comprar!" />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>
      </main>

    </BrowserRouter>
  );
}

export default App;
