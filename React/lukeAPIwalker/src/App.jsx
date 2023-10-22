import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Dropdown from './components/Dropdown';
import InputField from './components/Inputfield';
import Button from './components/Button';
import CharacterDetails from './components/CharacterDetails';
import PlanetDetails from './components/PlanetDetails';
import Error from './components/Error';
import './App.css'; 

function App() {
  // Define state variables
  const [resource, setResource] = useState('people'); // Default resource type
  const [id, setId] = useState('');

  const navigate = useNavigate(); // Use the useNavigate hook to programmatically update routes

  const handleResourceChange = (selectedResource) => setResource(selectedResource);

  const handleIdChange = (event) => setId(event.target.value);

  const handleButtonClick = () => {
    if (!id) return; // Check if id is empty, if not, execute the rest of the function
    const url = `/${resource}/${id}`; // Construct the URL based on the selected resource and ID
    navigate(url); // Use navigate to programmatically navigate to the URL
  };

  return (
    <div className="app-container">
      {/* Header */}
      <header>
        <h1>Star Wars API</h1>
      </header>

      {/* Resource Selection */}
      <div className="resource-selection">
        <Dropdown onSelectResource={handleResourceChange} />
        <InputField value={id} onChange={handleIdChange} />
        <Button onClick={handleButtonClick} />
      </div>

      {/* Routing */}
      <section>
        <Routes>
          <Route path="/" element={<div>Enter an ID for a person or planet to get started!!</div>} />
          <Route path="/people/:id" element={<CharacterDetails />} />
          <Route path="/planets/:id" element={<PlanetDetails />} />
          <Route path="*" element={<Error message="404 - Not Found, These are not the droids you're looking for." />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
