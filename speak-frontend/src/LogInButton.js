import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Auth from './Auth.js'

class LogInButton extends Component {

  constructor(props) {
      super(props);
      this.showLock = this.showLock.bind(this);
  }

  showLock() {
    const auth = new Auth();
    auth.login()
    //this.props.lock.show();

  }

  render() {
    return (
      <div className="LogInButton">
        <Button bsStyle="primary" bsSize="large" onClick={this.showLock}>Log In</Button>
      </div>
    );
  }
}

export default LogInButton;
