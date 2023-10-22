import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Error from './Error';

const CharacterDetails = () => {
  const [character, setCharacter] = useState({});
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await fetch(`https://swapi.dev/api/people/${id}/`);
        if (!response.ok) {
          setError(`These are not the droids you're looking for.`);
          return;
        }
        const data = await response.json();
        setError(null); // Reset the error state to null
        setCharacter(data);
      } catch (error) {
        setError('An error occurred');
        console.error('Error fetching character data:', error);
      }
    };

    fetchCharacter();
  }, [id]); //specifies which variable the effect depends on, would only run once if empty dependency

  if (error) {
    return <Error message={error} />; // Display the Error component with the error message
  }

  return !character ? <div>Loading...</div> : (
    <div>
      <h2>Character Details</h2>
      <p>Name: {character.name}</p>
      <p>Height: {character.height}</p>
      <p>Mass: {character.mass}</p>
      <p>Hair Color: {character.hair_color}</p>
    </div>
  );
};

export default CharacterDetails;
