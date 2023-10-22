import { useState } from "react";
import axios from "axios"; // Import the 'axios' library

// Ccomponent 'PokeDisplay'
const PokeDisplay = () => {
    const [pokemonList, setPokemonList] = useState([]); // Initialize pokemonList with an empty list
    const [offset, setOffset] = useState(0); // Initialize offset with a 0

    // Function 'createPokemonList'
    const createPokemonList = () => {
        // 'axios' to make an HTTP GET request to the PokeAPI
        axios
            .get(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`) // 'get' the data first
            .then((response) => { // 'then' do (...) with it:
                // - Update the 'offset' state by adding 10 to its current value
                setOffset(offset + 10);
                // - Set the 'pokemonList' state to the 'results' from the response data
                return setPokemonList(response.data.results); // Response is already made JSON
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div>
        <h1>PokeDisplay</h1>
        <button onClick={createPokemonList}>Fetch Pokemon</button>
        <ul>
            {pokemonList.map((pokemon, index) => {
                return <li key={index}>{pokemon.name}</li>;
            })}
        </ul>
    </div>
    );
};

export default PokeDisplay;
