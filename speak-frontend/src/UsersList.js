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
    fetch('https://speak-182609.appspot.com/petitions/', {
        'Authorization': `Bearer ${getAccessToken()}`,
        'Content-Type': 'application/json'
    })
    .then( response => response.json())
    .then( petitions =>
        this.setState(
            {petitions}
        )
     );
  }

  render() {

    return (
      <div className="PetitionList">
        <h2>Petitions</h2>
          {this.state.users.map(user =>
            <div key={user.name}>
                <PetitionListElement id={user.name} title={user.name} description={user.email}/>
            </div>)}
      </div>
    );
  }
}

export default UsersList;
