import React, { Component } from 'react';
import './CreatePetition.css';
import { FormGroup, Grid, Row, Col, Button, ControlLabel, FormControl } from 'react-bootstrap';

class CreatePetition extends Component {

  constructor(props) {
      super(props);
      this.handleTitle = this.handleTitle.bind(this);
      this.handleDescription = this.handleDescription.bind(this);
      this.handleSignatureGoal = this.handleSignatureGoal.bind(this);
      this.state = {
          title: "",
          description: "",
          signatureGoal: "",
          profile: {}
      };
  }

  componentWillMount() {
    const { isAuthenticated } = this.props.auth;
    if (isAuthenticated()) {
      const { userProfile, getProfile } = this.props.auth;
      if (!userProfile) {
        getProfile((err, profile) => {
          this.setState({ profile });
        });
      } else {
        this.setState({ profile: userProfile });
      }
    }
  }

  handleTitle(event) {
      this.setState({
        title: event.target.value });
//      window.alert(event.target.value)
  }

  handleDescription(event) {
      this.setState({
        description: event.target.value });
  }

  handleSignatureGoal(event) {
      this.setState({
          signatureGoal: event.target.value });
  }

  addPetition = event => {
      event.preventDefault();
      const { getAccessToken } = this.props.auth;
      const API_URL = 'https://speak-api-186516.appspot.com/';
      this.setState({
          title: event.target.value,
          description: event.target.value,
          signatureGoal: event.target.value
      });
      var petition = {
        'title': this.state.title,
        'description': this.state.description,
        'owner': this.state.profile.email,
      };
      fetch('https://speak-api-186516.appspot.com/petitions/', {
          method: 'POST',
          headers: {
              'Authorization': `Bearer ${getAccessToken()}`,
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(petition)
      })
      .then(response => {
            console.log(response, 'Petition added!');
            window.location.reload();
            window.alert("Successfully created petition!");
      })
      .catch(err => {
            console.log(err, 'Petition not added, try again');
      });

  }

  login() {
    this.props.auth.login();
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <div classname="container">
      {
        isAuthenticated() && (
          <div className="CreatePetition">
            <h1> Create a Petition </h1>
            <Grid>
                <Row classname="show-grid">
                    <Col xs={12} md={8} xsOffset={2}>
                        <FormGroup>
                            <div className="TitleForm">
                                <ControlLabel>Petition Title</ControlLabel>
                                <FormControl
                                  type="text"
                                  placeholder="Title"
                                  bsSize="large"
                                  onChange={this.handleTitle}
                                />
                                <FormControl.Feedback />
                            </div>
                            <div className="DescriptionForm">
                                <ControlLabel>Petition description</ControlLabel>
                                <FormControl
                                    componentClass="textarea"
                                    placeholder="Description"
                                    bsSize="large"
                                    onChange={this.handleDescription}
                                />
                            </div>
                            <div className="MinimumForm">
                                <ControlLabel>Minimum number of signatures required</ControlLabel>
                                <FormControl
                                  type="text"
                                  placeholder="Integer value"
                                  bsSize="large"
                                  onChange={this.handleSignatureGoal}
                                />
                            </div>
                            <Button classname="createPetition"
                                type="submit"
                                onClick={this.addPetition}
                                bsStyle="success"
                            > Submit Your Petition </Button>
                        </FormGroup>
                    </Col>
                </Row>
            </Grid>
          </div>
        )
      }
      {
        !isAuthenticated() && (
          <h4>
            You are not logged in! Please{' '}
            <a
              style={{ cursor: 'pointer' }}
              onClick={this.login.bind(this)}
            >
            Log In
            </a>
            {' '}to continue.
          </h4>
        )
      }
      </div>
    );
  }
}

export default CreatePetition;
