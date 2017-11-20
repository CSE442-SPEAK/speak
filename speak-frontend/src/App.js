import React, { Component } from 'react';
import { Button, Navbar, Nav } from 'react-bootstrap';
import SignUpButton from './SignUpButton';
import LogInButton from './LogInButton';
import AccountButton from './AccountButton';
import './App.css';
//import Navigation from './Navigation';


class App extends Component {

  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <div>
        <div className="Navigation">
          <Navbar>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="/home">speak</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav pullRight>
                { isAuthenticated() && (
                  <Button
                    bsStyle="primary"
                    className="btn-margin"
                    bsSize="large"
                    onClick={this.logout.bind(this)}>
                    Log Out
                  </Button>
                  )
                }
              </Nav>
              <Nav pullRight>
                { !isAuthenticated() && (
                  <Button
                    bsStyle="primary"
                    className="btn-margin"
                    bsSize="large"
                    onClick={this.login.bind(this)}>
                    Log In
                  </Button>
                  )
                }
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    );
  }
}

export default App;
