import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import SignInButton from './SignInButton';
import LogInButton from './LogInButton';

class Navigation extends Component {
  render() {
    return (
      <div className="Navigation">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">speak</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <SignInButton/>
            </Nav>
            <Nav pullRight>
              <LogInButton/>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
