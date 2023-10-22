import { useState } from "react";

// Component 'PokeDisplay'
const PokeDisplay = () => {
    const [pokemonList, setPokemonList] = useState([]); // Initialize pokemonList with an empty list
    const [offset, setOffset] = useState(0); // Initialize offset with a 0

    // Function 'createPokemonList'
    const createPokemonList = () => {
        // Make a network request to the PokeAPI with a limit of 10 and an offset value based on the 'offset' state
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`)
            .then((response) => {
                return response.json(); // Converts response from a HTTP response to a JavaScript object
            })
            // Update 'offset' state by adding 10 to its current value
            // Update the 'pokemonList' state with the 'results' from the response
            .then((response) => {
                setOffset(offset + 10);
                setPokemonList(response.results);
                console.log(offset);
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
                {/* Use 'map' to iterate over 'pokemonList' and 
                create <li> elements with the 'name' property 
                of each Pokemon as content */}
                {pokemonList.map((pokemon, index) => {
                    return <li key={index}>{pokemon.name}</li>;
                })}
            </ul>
        </div>
    );
};

export default PokeDisplay;
