import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import ExamplePetition from './ExamplePetition';
import CreatePetition from './CreatePetition';
import ErrorPage from'./ErrorPage';
import LogIn from './LogIn';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/example' component={ExamplePetition}/>
      <Route path='/create' component={CreatePetition}/>
      <Route path='*' component={ErrorPage}/>
      <Route path='/login' component={LogIn}/>
    </Switch>
  </main>
);

export default Main;
