import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class AccountButton extends Component {
  render() {
    return (
      <div className="AccountButton">
        <Button bsStyle="primary" bsSize="large" disabled active>Account</Button>
      </div>
    );
  }
}

export default AccountButton;
