import { useState } from "react";
import "./App.css";
import MiApi from "./components/MiApi";
import Buscador from "./components/Buscador";

function App() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  //search = Rick
  return (
    <>
      <h1>Bienvenido a la web de Rick and Morty</h1>
      <input
        type="text"
        // eslint-disable-next-line no-undef
        value={search}
        onChange={(e) => {
          // eslint-disable-next-line no-undef
          setSearch(e.target.value);
        }} //le pasamos Rick a MiApi
      />
      <input
        type="text"
        // eslint-disable-next-line no-undef
        value={status}
        onChange={(e) => {
          // eslint-disable-next-line no-undef
          setStatus(e.target.value);
        }} //le pasamos Rick a MiApi
      />
      <MiApi search={search} />
      <Buscador status={status} />
    </>
  );
}

export default App;
