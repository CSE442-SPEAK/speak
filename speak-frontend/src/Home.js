import React, { Component } from 'react';
import './Home.css';
import PetitionList from './PetitionList';
import Banner from './Banner';

const Home = () => (
  <div className="Home">
      <Banner/>
      <PetitionList/>
  </div>
);

export default Home;