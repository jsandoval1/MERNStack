import React from 'react';
import { useParams } from 'react-router-dom'; 
import NumberPage from './NumberPage';
import WordPage from './WordPage';

// NumberOrWordPage component
function NumberOrWordPage() {
  // Use useParams to get the route parameter from the URL
  const { param } = useParams();

  // Check if the route parameter is a number by using the isNaN function
  const isNumber = !isNaN(param);

  // Return the NumberPage component if the parameter is numeric, else return the WordPage component
  return isNumber ? <NumberPage /> : <WordPage />;
}
export default NumberOrWordPage;
