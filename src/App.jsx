import { useEffect, useState } from "react";
import "./App.css";
import Apis from "./components/Apis";
import Gatos from "./components/Gatos";
import Formulario from "./components/Formulario";
import DropDown from "./components/DropDown";
import RickaMortyApi from "./components/RickaMortyApi";

function App() {
  const [count, setCount] = useState(0);
  const [nombre, setNombre] = useState("");

  useEffect(() => {
    document.title = `You clicked ${count} times`;
    console.log("Hola G111");
  }, []);

  return (
    <>
      <section className="container_app">
        <h2>Ejemplo del uso del Hook useEffect</h2>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
        <input
          type="text"
          placeholder="nombre"
          name={nombre}
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </section>
      <br />
      <Apis />
      <Gatos /> <br />
      <RickaMortyApi />
      <Formulario />
      <DropDown />
    </>
  );
}

export default App;
