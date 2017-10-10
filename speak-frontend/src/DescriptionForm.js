import React, { Component } from 'react';
import { FormControl, ControlLabel } from 'react-bootstrap';

class DescriptionForm extends Component {
  render() {
    return (
      <div className="DescriptionForm">
        <ControlLabel>Petition description</ControlLabel>
        <FormControl componentClass="textarea" placeholder="Description"/>
      </div>
    );
  }
}

export default DescriptionForm;
