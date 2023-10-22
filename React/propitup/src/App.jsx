import './App.css'
import React from 'react';
import PersonCard from './components/PersonCard';

//Figure out why props gets passed into here
//when it already exists in PersonCard
const App = (props) => {
  return (
      <div className="App">
        <PersonCard name = {"Nathan Green"} age = {25} hairColor = {"Black"}/>
        <PersonCard name = {"John Sandoval"} age = {23} hairColor = {"Brown"}/>
        <PersonCard name = {"Shawn Converse"} age = {46} hairColor = {"Gray"}/>
        <PersonCard name = {"Ryan Cain"} age = {25} hairColor = {"Black"}/>
      </div>
  );
}
export default App
