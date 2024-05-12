import { useState, useEffect } from "react";

// eslint-disable-next-line react/prop-types
const MiApi = ({ search }) => {
  const [personajesApi, setPersonajesApi] = useState([]);
  const URL = "https://rickandmortyapi.com/api/character";
  const traerPersonajes = async () => {
    try {
      const data = await fetch(URL);
      const result = await data.json();
      const personajes = result.results;
      setPersonajesApi(personajes);
    } catch (error) {
      console.log("No trae los datos");
    }
  };
  useEffect(() => {
    traerPersonajes();
  }, []);
  let personajesAmostrar = [];
  if (search === "") {
    //Si Rick === ""
    personajesAmostrar = personajesApi;
  } else {
    personajesAmostrar = personajesApi.filter((personaje) =>
      // eslint-disable-next-line react/prop-types
      personaje.name.toLowerCase().includes(search.toLowerCase())
    );
  }
  return (
    <>
      <div>
        {personajesAmostrar.map((personaje, id) => (
          <p key={id}>{`${personaje.id}-${personaje.name}`}</p>
        ))}
        {personajesAmostrar.length === 0 ? (
          <p>No se encontraron resultados</p>
        ) : (
          ""
        )}
      </div>
    </>
  );
};
export default MiApi;
