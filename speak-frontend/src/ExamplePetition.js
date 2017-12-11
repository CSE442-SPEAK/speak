import React, { Component } from 'react';
import { FormGroup, Button, Table, Grid, Row, Col, ListGroup, ListGroupItem, ProgressBar } from 'react-bootstrap';
import SignButton from './SignButton';
import './ExamplePetition.css';
import { ShareButtons, ShareCounts, generateShareIcon } from 'react-share';

const { TwitterShareButton, EmailShareButton, FacebookShareButton, GooglePlusShareButton } = ShareButtons;

const EmailIcon = generateShareIcon('email');
const GooglePlusIcon = generateShareIcon('google');
const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');

const API_URL = 'https://speak-api-186516.appspot.com';

class ExamplePetition extends Component {

  constructor(props) {
      super(props);
      this.state = {
          petitions: [],
          signatures: [],
          users: [],
          names: [],
          profile: {},
          signaturesCount: [],
          signatureDate: "",
          owner: "",
      };
      this.componentDidMount = this.componentDidMount.bind(this);
      this.addSignature = this.addSignature.bind(this);
      this.getSignatures = this.getSignatures.bind(this);
      this.getNames = this.getNames.bind(this);
      this.getSignaturesCount = this.getSignaturesCount.bind(this);
      this.getOwner = this.getOwner.bind(this);

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

  // Get the signatures with the same petition id
  getSignatures() {
    //const { getAccessToken } = this.props.auth;
    //const headers = { 'Authorization': `Bearer ${getAccessToken()}`};
    fetch(API_URL + '/Signatures/petition_id/' + this.props.match.params.id)
    .then( response => response.json())
    .then( signatures =>
        this.setState(
            {signatures},
            this.getUsers
        ),
     )
  }

  // Get users who have signed the petition from Users table
  getUsers() {
      if(this.state.signatures){
  //              var names = [];
          this.state.signatures.map(signature =>
            fetch(API_URL + '/Users/' + signature.user_id)
            .then( response => response.json())
            .then( users =>
                {users}
              )
          );
      }
  }

  // Get user names
  getNames() {
      var names = [];
      this.state.users.map(user =>
        names.push(user.name)
      );
      this.setState(
        {names}
      )
  }

  // Get petition from Petitions table
  componentDidMount() {
      fetch(API_URL + '/Petitions/' + parseInt(this.props.match.params.id))
      .then( response => response.json())
      .then( petitions =>
          this.setState(
              {petitions: petitions},
              function() {
                this.getSignatures();
                this.getSignaturesCount();
                console.log(petitions[0]);
                this.getOwner(petitions[0].owner)
              }
          ),
      )
  }

  addSignature = event => {
      event.preventDefault();
      var today = new Date();
      const { isAuthenticated } = this.props.auth;
      if(isAuthenticated()) {
        const { getAccessToken } = this.props.auth;
        this.setState(
          {
            signatureDate: today.getFullYear() + '-' + (today.getMonth()) + '-' + today.getDate(),
          }, function(){
                var signature = {
                  'petition_id': this.props.match.params.id,
                  'name': this.state.profile.name,
                  'email': this.state.profile.email,
                  'date': this.state.signatureDate,
                };

                fetch(API_URL + '/Signatures', {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${getAccessToken()}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(signature)
                })
                .then(response => {
                      console.log(response, 'Signature added!');
                      window.location.reload();
                })
                .catch(err => {
                      console.log(err, 'Signature not added, try again');
                });
          }
        );
      }
      else {
        window.alert("You must be logged in to sign this petition.")
      }
  }

  getSignaturesCount() {
    //const { getAccessToken } = this.props.auth;
    //const headers = { 'Authorization': `Bearer ${getAccessToken()}`};
    fetch(API_URL + '/petitions/' + this.props.match.params.id + '/count')
    .then( response => response.json())
    .then( signaturesCount =>
        this.setState(
            {signaturesCount},
        ),
     )
  }

  getCount() {
    var count = 0;
    this.state.signaturesCount.forEach(function(obj) {
      count = parseInt(obj["count"]);
    });
    return count;
  }

  getGoal() {
    var goal = 0;
    this.state.petitions.forEach(function(obj) {
      goal = parseInt(obj["signature_goal"]);
    })
    return goal;
  }

  getSignaturePercent() {
    return (this.getCount()/this.getGoal()) * 100;
  }

  getOwner(user_id) {
    var ownerEmail = "";
    console.log(user_id);
    fetch(API_URL + '/Users/' + user_id)
    .then( response => response.json())
    .then( petitionOwner => {
        this.setState(
          {owner: petitionOwner[0].email.split("@")[0]}
        )
    });
  }

  render() {
    const shareUrl = 'https://speak-frontend.appspot.com/petitions/' + this.props.match.params.id;
    const title = 'speak - UB Petitions ';

    return (
      <div className="ExamplePetition">
        <Grid>
          <Row>
            {this.state.petitions.map(petition =>
              <div key={petition.petition_id}>
                  <h1 className="title"> {petition.title} </h1>
                  <h4> Created by: {this.state.owner} </h4>
                  <Col xs="7" mdOffset="1" className="section left">
                    <h3 className="desc"> {petition.description} </h3>
                  </Col>

              </div>)
            }
            <Col xs="3" mdOffset="-1" className="section left">
            <div className="ProgressBar">
              <ProgressBar now={this.getSignaturePercent()} />
            </div>
            <div className="SignatureCount">
              <h5>{this.getCount()} / {this.getGoal()} signatures</h5>
            </div>
              <Button type="submit" bsSize="large" bsStyle="success" onClick={this.addSignature} className="SignButton">Sign</Button>
            </Col>
          </Row>
          <div className="share">
            <h3> Share </h3>
            <TwitterShareButton url={shareUrl} title={title} className="socialmedia">
              <TwitterIcon size={48} round />
            </TwitterShareButton>
            <FacebookShareButton url={shareUrl} className="socialmedia">
              <FacebookIcon size={48} round />
            </FacebookShareButton>
            <GooglePlusShareButton url={shareUrl} className="socialmedia">
              <GooglePlusIcon size={48} round />
            </GooglePlusShareButton>
          </div>
          <hr />
          <div className="container-fluid bg-blue">
              <ListGroup className="SignaturesList">
                <h3> Signatures </h3>
                {this.state.signatures.map(signatures =>
                  <div key={signatures.email}>
                    <ListGroupItem className="listItem">
                      {signatures.email.split("@")[0]}
                    </ListGroupItem>
                  </div>
                )}
              </ListGroup>
          </div>
        </Grid>
      </div>
    );
  }
}

export default ExamplePetition;
