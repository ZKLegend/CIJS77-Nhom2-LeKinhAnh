import React from "react";
import { useState } from "react";
import axios from "axios";

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [isLoangding, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // Dùng Promise
  // const handleFetchPokemon = () => {
  // 	fetch('https://pokeapi.co/api/v2/pokemon')
  // 	.then((response) => {
  // 		console.log(response)
  // 		return response.json()
  // 	})
  // 	.then((data) => {
  // 		console.log(data)
  // 		setPokemons(data.results)
  // 	})
  // }

  // Dùng async/await
  // const handleFetchPokemon = async () => {
  // 	const response = await fetch('https://pokeapi.co/api/v2/pokemon');
  // 	const data = await response.json();
  // 	console.log(data);
  // 	setPokemons(data.results);
  // }

  // Dùng Axios
  const handleFetchPokemon = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
      const data = response.data;
      setPokemons(data.results);
      console.log(data);
      console.log(response);
      setIsLoading(false);
    } catch(error) {
      console.log(error.message);
	  setIsLoading(false);
	  setError(error.message);
    }
  };

  if (error) {
	return <div>Something went wrong: {error}</div>
  }

  return (
    <div>
      <button onClick={handleFetchPokemon}>Fetch Pokemon</button>
      {isLoangding && <p>Loading...</p>}
      {!isLoangding && pokemons.length == 0 && <p>No Pokemons</p>}
      {!isLoangding && pokemons.length > 0 && (
        <ul>
          {pokemons.map((pokemon) => {
            return <li key={pokemon.url}>{pokemon.name}</li>;
          })}
        </ul>
      )}
    </div>
  );
};

export default App;
