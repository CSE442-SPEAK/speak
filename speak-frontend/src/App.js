import React, { Component } from 'react';
import './App.css';
import Navigation from './Navigation';
import Main from './Main';


class App extends Component {

  render() {
    return (
      <div>
        <Navigation />
        <Main />
      </div>
    );
  }
}

export default App;
