import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class AboutButton extends Component {
  render() {
    return (
      <div className="AboutButton">
        <Button bsStyle="primary" bsSize="large" href="/about">About</Button>
      </div>
    );
  }
}

export default AboutButton;