import React, { Component } from 'react';
import { Panel, ControlLabel, Glyphicon, Grid, Row, Col } from 'react-bootstrap';
import PetitionListElement from './PetitionListElement';

class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      owned_petitions: [],
      signed_petitions: [],
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
    .then(owned_petitions => this.setState({owned_petitions}));
  }

  getSignedPetitions(email) {
    const {getAccessToken} = this.props.auth;
    const headers = {'Authorization':`Bearer ${getAccessToken()}`};
    fetch('https://speak-api-186516.appspot.com/signatures/email/'+ this.state.profile.email, {headers})
    .then(response => response.json())
    .then(signed_petitions => this.setState({signed_petitions}));
    alert(JSON.stringify(this.state.signed_petitions));
  }

  render() {
    const { profile } = this.state;
    this.getOwnedPetitions(this.state.profile.email);
    this.getSignedPetitions(this.state.profile.email);
    return (
      <div className="container">
        <div className="profile-area">
          <h1>{profile.name}</h1>
          <h1>{profile.email}</h1>
          <Panel header="Profile">
            <img src={profile.picture} alt="profile" />
            <div>
              <ControlLabel><Glyphicon glyph="user" /> Nickname</ControlLabel>
              <h3>{profile.nickname}</h3>
            </div>
          </Panel>
        </div>
        <div>
          <Grid>
          <Row>
            <Col xs={12}>
              <h2>Your Petitions</h2>
                {this.state.owned_petitions.map(owned_petition =>
                  <div key={owned_petition.petition_id}>
                    <PetitionListElement id={owned_petition.petition_id} title={owned_petition.title} description={owned_petition.description}/>
                  </div>
                )}
            </Col>
          </Row>
          </Grid>
        </div>
        <div>
          <Grid>
          <Row>
            <Col xs={12}>
              <h2>Signed Petitions</h2>
                {this.state.signed_petitions.map(signed_petition =>
                  <div key={signed_petition.petition_id}>
                    <PetitionListElement id={signed_petition.petition_id} title={signed_petition.title} description={signed_petition.description}/>
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
