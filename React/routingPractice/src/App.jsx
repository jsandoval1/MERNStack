import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import NumberOrWordPage from './components/NumberOrWordPage';
import ColoredWordPage from './components/ColoredWordPage';

function App() {
  return (
      // Routes for the application
    <Routes>
      {/* Route for "/home" renders Home component */}
      <Route path="/home" element={<Home />} />
        {/* Route for "/:param" renders NumberOrWordPage component */}
      <Route path="/:param" element={<NumberOrWordPage />} />
      {/* Route for "/:word/:color1/:color2" renders ColoredWordPage component */}
      <Route path="/:param/:color1/:color2" element={<ColoredWordPage />} />
    </Routes>
  );
}

export default App;