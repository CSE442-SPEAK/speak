import React, { Component } from 'react';
import './App.css';
import PetitionList from './PetitionList';
import Navigation from './Navigation';
import Banner from './Banner';
import CreatePetition from './CreatePetition';

const App = () => {
  return (
    <div className="App">
      <Navigation/>
      <Banner/>
      <PetitionList/>
      <CreatePetition/>
    </div>
  );
};

export default App;
