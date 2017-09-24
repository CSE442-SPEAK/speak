import React, { Component } from 'react';
import { ControlLabel, FormControl } from 'react-bootstrap';

class TitleForm extends Component {
  render() {
    return (
      <div className="TitleForm">
        <ControlLabel>Petition Title</ControlLabel>
        <FormControl
          type="text"
          placeholder="Title"
        />
        <FormControl.Feedback />
      </div>
    );
  }
}

export default TitleForm;
