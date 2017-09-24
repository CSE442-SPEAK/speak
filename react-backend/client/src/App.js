import React, { Component } from 'react';
import './App.css';
import PetitionList from './PetitionList';
import Navigation from './Navigation';
import Banner from './Banner';

const App = () => {
  return (
    <div className="App">
      <Navigation/>
      <Banner/>
      <PetitionList/>
    </div>
  );
};

export default App;
