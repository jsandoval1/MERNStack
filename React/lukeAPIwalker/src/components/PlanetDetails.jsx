import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Error from './Error';

const PlanetDetails = () => {
    const [planet, setPlanet] = useState({});
    const [error, setError] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchPlanet = async () => {
            try {
                const response = await fetch(`https://swapi.dev/api/planets/${id}/`);
                if (!response.ok) {
                    setError(`These are not the droids you're looking for.`);
                    return;
                }
                const data = await response.json();
                setError(null); // Reset the error state to null
                setPlanet(data);
            } catch (error) {
                setError('An error occurred');
                console.error('Error fetching planet data:', error);
            }
        };

        fetchPlanet();
    }, [id]); //specifies which variable the effect depends on, would only run once if empty dependency

    if (error) {
        return <Error message={error} />; // Display the Error component
    }

    return !planet ? <div>Loading...</div> : (
        <div>
            <h2>Planet Details</h2>
            <p>Name: {planet.name}</p>
            <p>Climate: {planet.climate}</p>
            <p>Terrain: {planet.terrain}</p>
        </div>
    );
};

export default PlanetDetails;
