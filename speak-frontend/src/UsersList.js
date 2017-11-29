import React, { Component } from 'react';
import PetitionListElement from './PetitionListElement';
import { Col, Panel, Accordion } from 'react-bootstrap';
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
    return (
      <div className="UsersList">
        <h2>User Directory</h2>
          {this.state.users.map(user =>
            <div key={user.name}>
            <Col xs="4">
            <div className="UsersListElement">
              <Accordion>
              <Panel collapsible header={user.name}>
              </Panel>
              </Accordion>
            </div>
            </Col>
            </div>)}
      </div>
    );
  }
}

export default UsersList;
