import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class SignUpButton extends Component {
  render() {
    return (
      <div className="SignUpButton">
        <Button bsStyle="primary" bsSize="large" href="/signup">Sign Up</Button>
      </div>
    );
  }
}

export default SignUpButton;
