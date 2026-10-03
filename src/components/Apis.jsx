import { useEffect, useState } from "react";

const Apis = () => {
  // 3 - info guardará los valores traídos desde la API
  const [info, setInfo] = useState();

  // 2 - Llamamos a la función consultarApi al momento de montar el componente
  useEffect(() => {
    consultarApi();
  }, []);

  // 1 - Función que consulta la API
  const consultarApi = async () => {
    const url = "https://api.gameofthronesquotes.xyz/v1/random";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setInfo(`${data.sentence} - ${data.character.name}`); // Con setInfo actualizamos el estado
  };

  return (
    <div style={{backgroundColor:"gainsboro", padding:"2rem", color:"black"}}>
      <h2>Consumiendo una API</h2>
      {/* Mostramos la info */}
      {info}
    </div>
  );
};

export default Apis;
