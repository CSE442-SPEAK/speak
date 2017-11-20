import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import ExamplePetition from './ExamplePetition';
import CreatePetition from './CreatePetition';
import PetitionList from './PetitionList';

import ErrorPage from'./ErrorPage';
import LogIn from './LogIn';
import SignUp from './SignUp';
import About from './About'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/petitions' component={PetitionList}/>
        <Route path='/petitions/:id' component={ExamplePetition}/>
//      <Route path='/example' component={ExamplePetition}/>
      <Route path='/create' component={CreatePetition}/>
      <Route path='/login' component={LogIn}/>
      <Route path='/about' component={About}/>
      <Route path='/signup' component={SignUp}/>
      <Route path='*' component={ErrorPage}/>
    </Switch>
  </main>
);

export default Main;
