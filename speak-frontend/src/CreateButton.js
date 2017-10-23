import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class CreateButton extends Component {
  render() {
    return (
      <div className="CreateButton">
        <Button bsStyle="success">Create</Button>
      </div>
    );
  }
}

export default CreateButton;
