import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
import CreatePetitionButton from './CreatePetitionButton';

class Banner extends Component {
  render() {
    return (
      <div className="Banner">
        <Jumbotron>
          <h1>speak</h1>
          <p>Be heard.</p>
          <CreatePetitionButton/>
        </Jumbotron>
      </div>
    );
  }
}

export default Banner;
