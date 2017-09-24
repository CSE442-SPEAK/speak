import React, { Component } from 'react';
import PetitionListElement from './PetitionListElement';
import { ListGroup } from 'react-bootstrap';

class PetitionList extends Component {
  render() {
    return (
      <div className="PetitionList">
        <h2>Petitions</h2>
        <ListGroup>
          <PetitionListElement title="Heated Bus Stops"/>
          <PetitionListElement title="Bring Late Night Buses Back!"/>
        </ListGroup>
      </div>
    );
  }
}

export default PetitionList;
