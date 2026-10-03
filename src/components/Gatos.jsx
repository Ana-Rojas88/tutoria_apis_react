import { useEffect, useState } from "react";

const Gatos = () => {
  const [gato, setGato] = useState([]);

  useEffect(() => {
    consultarApi();
  }, []);

  const consultarApi = async () => {
    const url = "https://api.thecatapi.com/v1/images/search?limit=10";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setGato(data);
  };

  return (
    <div >
      <h2 style={{textAlign:"center"}}>  Consumiendo API de  Gatos</h2>
     
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "2rem",
          justifyContent: "center",
        }}
      >
        {gato.map((item) => (
          <div key={item.id} style={{ width: "20rem", height: "20rem" }} >
            {item.url ? (
              <img
                src={item.url}
                alt={item.id}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            ) : (
              <img
                src="https://i.pinimg.com/736x/4f/89/12/4f89123f33f59eedd85cba224c0591a0.jpg"
                alt="Imagen por defecto"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gatos;
