import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class SignButton extends Component {
  render() {
    return (
      <div className="SignButton">
        <Button bsStyle="success">Sign</Button>
      </div>
    );
  }
}

export default SignButton;
