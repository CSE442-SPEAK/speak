import React, { Component } from 'react';
import PetitionListElement from './PetitionListElement';
import { Accordion } from 'react-bootstrap';
import './PetitionList.css';

class UsersList extends Component {

  constructor(props) {
      super(props);
      this.state = {
          users: []
      };
      this.componentDidMount = this.componentDidMount.bind(this);

  }

  componentDidMount() {
      const { getAccessToken } = this.props.auth;
      const headers = { 'Authorization': `Bearer ${getAccessToken()}`}
      fetch('https://speak-api-186516.appspot.com/users', { headers })
      .then( response => response.json())
      .then( users =>
          this.setState(
              {users}
          )
       );
  }

  render() {
    window.alert(JSON.stringify(this.state.users));
    return (
      <div className="UsersList">
        <h2>Users</h2>
          {this.state.users.map(user =>
            <div key={user.name}>
                <PetitionListElement id={user.name} title={user.email} />
            </div>)}
      </div>
    );
  }
}

export default UsersList;
