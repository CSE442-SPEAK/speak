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
      };
      this.componentDidMount = this.componentDidMount.bind(this);
      this.addSignature = this.addSignature.bind(this);
      this.getSignatures = this.getSignatures.bind(this);
      this.getNames = this.getNames.bind(this);
      this.getSignaturesCount = this.getSignaturesCount.bind(this);

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
    const { getAccessToken } = this.props.auth;
    const headers = { 'Authorization': `Bearer ${getAccessToken()}`};
    fetch('https://speak-api-186516.appspot.com/Signatures/petition_id/' + this.props.match.params.id, { headers })
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
            fetch('https://speak-api-186516.appspot.com/Users/' + signature.user_id)
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
      fetch('https://speak-api-186516.appspot.com/Petitions/' + parseInt(this.props.match.params.id))
      .then( response => response.json())
      .then( petitions =>
          this.setState(
              {petitions: petitions},
              function() {
                this.getSignatures();
                this.getSignaturesCount();
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
                  'email': this.state.profile.email,
                  'date': this.state.signatureDate,
                };

                fetch('https://speak-api-186516.appspot.com/Signatures', {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${getAccessToken()}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(signature)
                })
                .then(response => {
                      console.log(response, 'Signature added!');

                      window.alert("Successfully signed petition!");
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
    const { getAccessToken } = this.props.auth;
    const headers = { 'Authorization': `Bearer ${getAccessToken()}`};
    fetch('https://speak-api-186516.appspot.com/petitions/' + this.props.match.params.id + '/count', { headers })
    .then( response => response.json())
    .then( signaturesCount =>
        this.setState(
            {signaturesCount},
        ),
     )
  }

  getSignaturePercent() {
    const str = JSON.stringify(this.state.signaturesCount);
    const array = JSON.parse(str);
    console.log(array);
    var current = 0;
    array.forEach(function(obj) {
      console.log("obj: " + obj);
      var keys = Object.keys(obj);
      keys.forEach(function(key) {
          console.log("key: " + key);
          current = parseInt(obj[key]);
          console.log("current: " + current);
      })
    });
    const goal = JSON.stringify(this.state.petitions);
    console.log(goal);
    return (current/goal) * 100;
  }

  render() {
    const shareUrl = 'https://speak-frontend.appspot.com/petitions/' + this.props.match.params.id;
    const title = 'speak - UB Petitions ';

    return (
      <div className="ExamplePetition">
        <Grid>
          {this.state.petitions.map(petition =>
            <div key={petition.petition_id}>
                <h1 class="title"> {petition.title} </h1>
                <h3 class="desc"> {petition.description} </h3>
                <div className="SignaturesCount">
                    {this.state.signaturesCount.map(signaturesCount =>
                      <div key={signaturesCount.count}>
                        <h4> Number of signatures: {signaturesCount.count} </h4>
                      </div>
                    )}
                </div>
                <h3>{this.getSignaturePercent()}</h3>
                <div className="ProgressBar">
                  <ProgressBar now={this.getSignaturePercent()} label={`${this.getSignaturePercent()}%`} />
                </div>
                <div className="SignButton">
                    <Button type="submit" bsSize="large" bsStyle="success" onClick={this.addSignature}>Sign</Button>
                </div>
                <div className="container-fluid bg-blue">
                    <ListGroup className="SignaturesList">
                      <h3> Signatures </h3>
                      {this.state.signatures.map(signatures =>
                        <div key={signatures.name}>
                          <ListGroupItem className="listItem">
                            {signatures.name}
                          </ListGroupItem>
                        </div>
                      )}
                    </ListGroup>
                </div>
            </div>)
          }
          <TwitterShareButton url={shareUrl} title={title} className="socialmedia">
            <TwitterIcon size={48} round />
          </TwitterShareButton>
          <FacebookShareButton url={shareUrl} className="socialmedia">
            <FacebookIcon size={48} round />
          </FacebookShareButton>
          <GooglePlusShareButton url={shareUrl} className="socialmedia">
            <GooglePlusIcon size={48} round />
          </GooglePlusShareButton>
        </Grid>
      </div>
    );
  }
}

export default ExamplePetition;
