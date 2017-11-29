import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
import CreatePetitionButton from './CreatePetitionButton';
import './Banner.css';

class Banner extends Component {
  render() {
    return (
      <div className="Banner">
        <Jumbotron>
          <h1>speak</h1>
          <h2>Be heard.</h2>
          <br />
          <CreatePetitionButton/>
        </Jumbotron>
      </div>
    );
  }
}

export default Banner;
