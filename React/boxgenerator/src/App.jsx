import React, { useState } from 'react';
import './App.css';
import BoxList from './components/BoxList';

// Component BoxGenerator
function BoxGenerator() {
  const [boxes, setBoxes] = useState([]); // boxes = empty array [] that will be populated by setBoxes
  const [color, setColor] = useState(''); //olor = empty string that will be populated by setColor
  const [size, setSize] = useState(100); //size= default start size will be 100, but can be changed

  const handleColorChange = (e) => setColor(e.target.value); // Takes the value from input field upon click, useState to update color
  const handleSizeChange = (e) => setSize(e.target.value);

  const handleBoxSubmit = (newBox) => setBoxes([...boxes, newBox]);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Gabarito',
    }}>
      <h1>Box Generator</h1>
      {/* Passing BoxList component props */}
      <div style={{ textAlign: 'center' }}>
        <BoxList
          boxes={boxes}
          color={color}
          size={size}
          onColorChange={handleColorChange}
          onSizeChange={handleSizeChange}
          onBoxSubmit={handleBoxSubmit}
        />
      </div>
    </div>
  );
}

export default BoxGenerator;
