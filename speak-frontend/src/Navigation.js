import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import SignUpButton from './SignUpButton';
import LogInButton from './LogInButton';
import AccountButton from './AccountButton';

class Navigation extends Component {
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
              <LogInButton/>
            </Nav>/*
            <Nav pullRight>
              <AccountButton/>
            </Nav>*/
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
