import React, { Component } from 'react';
import { Button, Navbar, Nav, NavItem } from 'react-bootstrap';
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
                  <NavItem
                    onSelect={this.logout.bind(this)}>
                    Log Out
                  </NavItem>
                )
                }
                { isAuthenticated() && (
                  <NavItem
                    href="/profile">
                    Profile
                  </NavItem>
                )
                }
                { !isAuthenticated() && (
                  <NavItem
                    onSelect={this.login.bind(this)}>
                    Log In
                  </NavItem>
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
