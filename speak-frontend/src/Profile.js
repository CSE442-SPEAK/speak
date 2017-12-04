import React, { Component } from 'react';
import { Panel, ControlLabel, Glyphicon, Grid, Row, Col } from 'react-bootstrap';
import PetitionListElement from './PetitionListElement';
import './Profile.css';

class Profile extends Component {

  constructor(props) {
    super(props);
    this.getOwnedPetitions = this.getOwnedPetitions.bind(this);
    this.getSignedPetitions = this.getSignedPetitions.bind(this);
    this.state = {
      ownedPetitions: [],
      signedPetitions: [],
      profile: {},
    }
  }

  componentWillMount() {
    const { userProfile, getProfile } = this.props.auth;
    if (!userProfile) {
      getProfile((err, profile) => {
        this.setState({ profile });
      });
    } else {
      this.setState({ profile: userProfile });
    }
  }

  getOwnedPetitions(email) {
    const {getAccessToken} = this.props.auth;
    const headers = {'Authorization':`Bearer ${getAccessToken()}`};
    fetch('https://speak-api-186516.appspot.com/petitions/email/'+ email, {headers})
    .then(response => response.json())
    .then(ownedPetitions => this.setState({ownedPetitions}));
  }

  getSignedPetitions(email) {
    const {getAccessToken} = this.props.auth;
    const headers = {'Authorization':`Bearer ${getAccessToken()}`};
    fetch('https://speak-api-186516.appspot.com/signatures/email/'+ this.state.profile.email, {headers})
    .then(response => response.json())
    .then(signedPetitions =>
      this.setState({signedPetitions},
      ),
    )
  }

  render() {
    const { profile } = this.state;
    this.getOwnedPetitions(this.state.profile.email);
    return (
      <div className="container">
        <div className="profile-area">
          <Panel header="Profile">
            <h1>{profile.name}</h1>
            <img className="profile-pic" src={profile.picture} alt="profile" />
            <div className="info">
              <h4>Nickname: {profile.nickname}</h4>
              <h4>Email: {profile.email}</h4>
            </div>
          </Panel>
        </div>
        <div>
          <Grid>
          <Row>
            <Col xs={12}>
              <h3>Your Petitions</h3>
                {this.state.ownedPetitions.map(ownedPetition =>
                  <div key={ownedPetition.petition_id}>
                    <PetitionListElement id={ownedPetition.petition_id} title={ownedPetition.title} snippet={ownedPetition.snippet}}/>
                  </div>
                )}
            </Col>
          </Row>
          </Grid>
        </div>

      </div>
    );
  }
}

export default Profile;
