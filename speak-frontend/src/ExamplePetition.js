import React, { Component } from 'react';
import { FormGroup, Button, Table } from 'react-bootstrap';
import SignButton from './SignButton';
import './ExamplePetition.css';
import { Grid, Row, Col} from 'react-bootstrap';
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
          signatureUser: 0
//          signatureDate: "",
      };
      this.componentDidMount = this.componentDidMount.bind(this);
      this.addSignature = this.addSignature.bind(this);
      this.getSignatures = this.getSignatures.bind(this);
      this.getNames = this.getNames.bind(this);
      this.displaySignatures = this.displaySignatures.bind(this);

  }

  // Get the signatures with the same petition id
  getSignatures() {
          fetch('https://speak-api-186516.appspot.com/Signatures/petition_id/' + this.props.match.params.id)
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
      fetch('https://speak-api-186516.appspot.com/Petitions' + parseInt(this.props.match.params.id))
      .then( response => response.json())
      .then( petitions =>
          this.setState(
              {petitions: petitions},
              this.getSignatures
          ),
      )
  }

  addSignature = event => {
      event.preventDefault();
//      var today = new Date();
      const { isAuthenticated } = this.props.auth;
      if(isAuthenticated()) {
        const { getAccessToken } = this.props.auth;
        this.setState(
          {
          // Need to get ID of signed in user
           signatureUser: 1,
  //         signatureDate: today.getFullYear() + '-' + (today.getMonth()) + '-' + today.getDate(),
          }, function(){
                var signature = {
                  'petition_id': this.props.match.params.id,
                  'user_id': this.state.signatureUser,
  //                'date': this.state.signatureDate,
                };

                fetch('https://speak-api-186516.appspot.com/Signatures/', {
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

  // Does not work
  displaySignatures = event => {
      event.preventDefault();
      return (
        <Table striped bordered condensed hover>
        <thead>
        <tr>
        <th>#</th>
        <th>Signatures</th>
        </tr>
        </thead>
        <tbody>
        <tr>
           <td>1</td>
           <td>Mark</td>
          </tr>

         </tbody>
        </Table>
      );
  }

  render() {
    const shareUrl = 'https://speak-frontend.appspot.com/petitions/' + this.props.match.params.id
    const title = 'speak - UB Petitions '

    return (
      <div className="ExamplePetition">
        <FormGroup>
          {this.state.petitions.map(petition =>
            <div key={petition.petition_id}>
                <h1 class="title"> {petition.title} </h1>
                <h3 class="desc"> {petition.description} </h3>
                <div className="SignButton">
                    <Button type="submit" bsStyle="success" onClick={this.addSignature}>Sign</Button>
                </div>
            </div>)
           }
           <div className="socialmedia">
             <TwitterShareButton
                 url={shareUrl}
                 title={title}
                 className="ExamplePetition">
                 <TwitterIcon
                   size={48}
                   round />
               </TwitterShareButton>
               <FacebookShareButton
               url={shareUrl}
               className="ExamplePetition">
               <FacebookIcon
               size={48}
               round />
               </FacebookShareButton>
               <GooglePlusShareButton
                 url={shareUrl}
                 className="ExamplePetition">
               <GooglePlusIcon
               size={48}
               round />
               </GooglePlusShareButton>
               <EmailShareButton
               url={shareUrl}
               subject={title}
               body="body"
               className="ExamplePetition">
               <EmailIcon
               size={48}
               round />
               </EmailShareButton>
             </div>
             </FormGroup>
      </div>
    );
  }
}

export default ExamplePetition;
