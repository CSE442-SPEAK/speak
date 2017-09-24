import React, { Component } from 'react';
import './App.css';
import PetitionList from './PetitionList';
import Navigation from './Navigation';

const App = () => {
  return (
    <div className="App">
      <Navigation/>
      <PetitionList/>
    </div>
  );
};

export default App;
