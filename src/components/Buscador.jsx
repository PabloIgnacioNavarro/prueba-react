import { useState, useEffect } from "react";

// eslint-disable-next-line react/prop-types
const Buscador = ({ status }) => {
  const [statusApi, setStatusApi] = useState([]);
  const URL = "https://rickandmortyapi.com/api/character";
  const traerStatus = async () => {
    try {
      const data = await fetch(URL);
      const result = await data.json();
      const status = result.results;
      setStatusApi(status);
    } catch (error) {
      console.log("No trae los datos");
    }
  };
  useEffect(() => {
    traerStatus();
  }, []);
  let statusAmostrar = [];
  if (status === "") {
    //Si Rick === ""
    statusAmostrar = statusApi;
  } else {
    statusAmostrar = statusApi.filter((status) =>
      // eslint-disable-next-line react/prop-types
      status.status.toLowerCase().includes(status.toLowerCase())
    );
  }
  return (
    <>
      <div>
        {statusAmostrar.map((status, id) => (
          // eslint-disable-next-line react/prop-types
          <p key={id}>{`${status.id}-${status.species}`}</p>
        ))}
        {statusAmostrar.length === 0 ? <p></p> : ""}
      </div>
    </>
  );
};
export default Buscador;
