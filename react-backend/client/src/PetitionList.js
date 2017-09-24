import React, { Component } from 'react';
import PetitionListElement from './PetitionListElement';
import { Accordion } from 'react-bootstrap';

class PetitionList extends Component {
  render() {
    return (
      <div className="PetitionList">
        <h2>Petitions</h2>
        <Accordion>
          <PetitionListElement title="Heated Bus Stops"/>
          <PetitionListElement title="Bring Late Night Buses Back!"/>
        </Accordion>
      </div>
    );
  }
}

export default PetitionList;
