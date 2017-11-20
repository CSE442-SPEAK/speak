import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import SignUpButton from './SignUpButton';
import LogInButton from './LogInButton';
import AccountButton from './AccountButton';
import Auth0Lock from 'auth0-lock';


class Navigation extends Component {

  componentWillMount() {
    this.lock = new Auth0Lock('3AENWl_-dFQnyEOBAlq7AMMhi_K7RUwy', 'speak-ub.auth0.com');
  }

  render() {
    return (
      <div className="Navigation">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">speak</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <SignUpButton/>
            </Nav>
            <Nav pullRight>
              <LogInButton lock={this.lock} />
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
