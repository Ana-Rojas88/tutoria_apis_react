import React, { useEffect, useState } from "react";

const RickaMortyApi = () => {
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState("");

  const fetchCharacters = async () => {
    try {
      const url = "https://rickandmortyapi.com/api/character";
      const response = await fetch(url);
      const data = await response.json();
      setCharacters(data.results); // .results es el array de personajes
    } catch (err) {
      setError("Error al cargar personajes.");
      console.error(err);
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <div>
      <h2>Personajes de Rick and Morty</h2>

      {error && <p>{error}</p>}

      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {characters.map((char) => (
          <div
            key={char.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              width: "200px",
            }}
          >
            <img src={char.image} alt={char.name} style={{ width: "100%" }} />
            <h4>{char.name}</h4>
            <p>Status: {char.status}</p>
            <p>Species: {char.species}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RickaMortyApi;
