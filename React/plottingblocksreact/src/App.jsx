import React from 'react';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Main from './components/Main';
import SubContents from './components/subcontent';
import Advertisement from './components/Advertisement';

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="content-container">
        <Navigation />
        <Main>
          <div className="sub-content-container">
            <SubContents />
            <SubContents />
            <SubContents />
          </div>
          <Advertisement />
        </Main>
      </div>
    </div>
  );
}

export default App;
