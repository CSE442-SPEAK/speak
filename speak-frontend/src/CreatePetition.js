import React, { Component } from 'react';
import './CreatePetition.css';
import { FormGroup, Grid, Row, Col, Button, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';

class CreatePetition extends Component {

  constructor(props) {
    super(props);
    this.handleTitle = this.handleTitle.bind(this);
    this.handleSnippet = this.handleSnippet.bind(this);
    this.handleDescription = this.handleDescription.bind(this);
    this.handleSignatureGoal = this.handleSignatureGoal.bind(this);
    this.state = {
      title: "",
      snippet: "",
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

  handleSnippet(event){
    this.setState({
      snippet: event.target.value });
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
          this.setState({
            title: event.target.value,
            snippet: event.target.value,
            description: event.target.value,
            signatureGoal: event.target.value
          });
          var petition = {
            'title': this.state.title,
            'snippet': this.state.snippet,
            'description': this.state.description,
            'owner': this.state.profile.email,
            'name': this.state.profile.name,
            'signature_goal': this.state.signatureGoal,
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

        getValidationStateTitle() {
          const length = this.state.title.length;
          if (length > 0) return 'success';
          return null;

        }

        getValidationStateSnippet() {
          const length = this.state.snippet.length;
          if (length > 0 && length <= 50) return 'success';
          if (length > 50) return 'error';
          return null;
        }

        getValidationStateDescription() {
          const length = this.state.description.length;
          if (length > 0) return 'success';
          return null;
        }

        getValidationStateCount() {
          if (this.state.signatureGoal.length > 0) {
            if(this.isNormalInteger(this.state.signatureGoal)) {
              if (parseInt(this.state.signatureGoal, 10) >= 50) {
                return 'success';
              } else {
                return 'error';
              }
            } else {
              return 'error';
            }
          }
          return null;
        }

        isNormalInteger(str) {
          return /^\+?(0|[1-9]\d*)$/.test(str);
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
                <FormGroup
                validationState = {this.getValidationStateTitle()}>
                <div className="TitleForm">
                <ControlLabel>Petition Title</ControlLabel>
                <FormControl
                type="text"
                value = {this.state.title}
                placeholder="Title"
                bsSize="large"
                onChange={this.handleTitle}
                />
                <FormControl.Feedback />
                </div>
                </FormGroup>
                <FormGroup
                validationState = {this.getValidationStateSnippet()}>
                <div className="SnippetForm">
                <ControlLabel>Petition Snippet</ControlLabel>
                <FormControl
                type="text"
                value = {this.state.snippet}
                placeholder="50 character petition preview"
                bsSize="large"
                onChange={this.handleSnippet}
                />
                <FormControl.Feedback />
                </div>
                </FormGroup>
                <FormGroup
                validationState={this.getValidationStateDescription()}>
                <div className="DescriptionForm">
                <ControlLabel>Petition description</ControlLabel>
                <FormControl
                componentClass="textarea"
                value = {this.state.description}
                placeholder="Description"
                bsSize="large"
                onChange={this.handleDescription}
                />
                <FormControl.Feedback />
                </div>
                </FormGroup>
                <FormGroup
                validationState={this.getValidationStateCount()}>
                <div className="MinimumForm">
                <ControlLabel>Minimum number of signatures required</ControlLabel>
                <FormControl
                type="text"
                value={this.state.signatureGoal}
                placeholder="Integer value"
                bsSize="large"
                onChange={this.handleSignatureGoal}
                />
                <FormControl.Feedback />
                <HelpBlock>The signature goal must be greater than 50.</HelpBlock>
                </div>
                </FormGroup>
                <FormGroup>
                <Button classname="createPetition"
                type="submit"
                onClick={this.addPetition}
                bsStyle="success">
                Submit Your Petition
                </Button>
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
