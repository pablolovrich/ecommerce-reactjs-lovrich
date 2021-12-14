//CSS
import "./App.css";

//COMPONENTS
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer nombre="Pablo" apellido="Lovrich" />
    </div>
  );
}

export default App;
