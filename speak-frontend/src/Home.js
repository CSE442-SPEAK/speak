import React, { Component } from 'react';
import { Grid} from 'react-bootstrap';
import './Home.css';
import PetitionList from './PetitionList';
import Banner from './Banner';

const Home = () => (
  <div className="Home">
      <Banner/>
      <Grid>
      <PetitionList/>
      </Grid>
  </div>
);

export default Home;
