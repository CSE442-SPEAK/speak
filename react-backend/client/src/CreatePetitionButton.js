import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class CreatePetitionButton extends Component {
  render() {
    return (
      <div className="CreatePetitionButton">
        <Button bsStyle="success" href="/create">Create a Petition</Button>
      </div>
    );
  }
}

export default CreatePetitionButton;
