import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';
import Home from './Home';
import ExamplePetition from './ExamplePetition';
import CreatePetition from './CreatePetition';
import PetitionList from './PetitionList';
import ErrorPage from'./ErrorPage';
import LogIn from './LogIn';
import SignUp from './SignUp';
import Auth from './Auth';
import Callback from './Callback';
import history from './history';

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}

export const createRoutes = () => {
  return (
    <BrowserRouter history={history} component={App}>
      <div>
        <Route path='/' render={(props) => <App auth={auth} {...props} />} />
        <Route path='/home' render={(props) => <Home auth={auth} {...props} />} />
        <Route path="/callback" render={(props) => {
          handleAuthentication(props);
          return <Callback {...props} />
        }} />
        <Route exact path='/petitions' component={PetitionList}/>
          <Route path='/petitions/:id' render={(props) => <ExamplePetition auth={auth} {...props} />}/>
        <Route path='/create' render={(props) => <CreatePetition auth={auth} {...props} />} />
      </div>
    </BrowserRouter>
  );
}
