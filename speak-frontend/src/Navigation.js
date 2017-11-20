import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import SignUpButton from './SignUpButton';
import LogInButton from './LogInButton';
import AccountButton from './AccountButton';
import Auth0Lock from 'auth0-lock';


class Navigation extends Component {

  componentWillMount() {
    this.lock = new Auth0Lock('3AENWl_-dFQnyEOBAlq7AMMhi_K7RUwy', 'speak-ub.auth0.com');
    //this.setState({idToken: this.getIdToken()})
  }

  /*
  createLock() {
    this.lock = new Auth0Lock(this.props.clientId, this.props.domain);
  }

  getIdToken() {
    var idToken = localStorage.getItem('id_token');
    var authHash = this.lock.parseHash(window.location.hash);
    if (!idToken && authHash) {
      if (authHash.id_token) {
        idToken = authHash.id_token;
        localStorage.setItem('id_token', authHash.id_token);
      }
      if (authHash.error) {
        console.log("Error signing in", authHash);
      }
    }
    return idToken;
  }
  */

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
