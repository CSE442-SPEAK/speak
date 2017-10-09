import React, { Component } from 'react';
import { FormControl, ControlLabel } from 'react-bootstrap';

class MinimumForm extends Component {
  render() {
    return (
      <div className="MinimumForm">
        <ControlLabel>Minimum number of signatures required</ControlLabel>
        <FormControl
          type="text"
          placeholder="Integer value"
        />
      </div>
    );
  }
}

export default MinimumForm;
