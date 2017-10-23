import React, { Component } from 'react';
import { FormGroup, Button } from 'react-bootstrap';
import SignButton from './SignButton';
//import {ShareButtons, ShareCounts, generateShareIcon} from 'react-share';
import './ExamplePetition.css';

/*const {
    FacebookShareButton,
    EmailShareButton,
} = ShareButtons;

const {
    FacebookShareCount,
} = ShareCounts;

const FacebookIcon = generateShareIcon('facebook');
const EmailIcon = generateShareIcon('email');*/

class ExamplePetition extends Component {

  constructor(props) {
      super(props);
      this.state = {
          petitions: [],
          signatures: [],
          names: [],
          signaturePetition: 0,
          signatureUser: 0
//          signatureDate: "",
      };
      this.componentDidMount = this.componentDidMount.bind(this);
      this.addSignature = this.addSignature.bind(this);
      this.getSignatures = this.getSignatures.bind(this);
      this.getNames = this.getNames.bind(this);

  }

  getSignatures() {
/*      return new Promise((resolve, reject) => {
          // (2) get the signatures with the same petition id
          fetch('/Signatures/' + this.props.match.params.id)
          .then( response => response.json())
          .then( signatures =>
              this.setState(
                  {signatures: signatures}
              );
              resolve("Success! Got signatures!");
            )
           .catch(err => {
               reject("Failed!")
            }
           )
        }
      )*/
          // (2) get the signatures with the same petition id
          fetch('/Signatures/' + this.props.match.params.id)
          .then( response => response.json())
          .then( signatures =>
              this.setState(
                  {signatures},
                  this.getNames
              ),
           )
  }

  getNames() {
/*      return new Promise((resolve, reject) => {
          this.state.signatures.map(signature =>
            fetch('/Users/' + signature.user_id)
            .then( response => response.json())
            .then( users =>
              names.push(users[0].name)
              )
          );
          this.setState(
            {names: names}
          );
          window.alert(JSON.stringify(names));
          resolve("Success! Got names!");
        }
      )*/
          var names = [];
          this.state.signatures.map(signature =>
            fetch('/Users/' + signature.user_id)
            .then( response => response.json())
            .then( users =>
              names.push(users[0].name)
              )
          );
          this.setState(
            {names: names}
          );
//          window.alert(JSON.stringify(names));
  }

/*  getPetitions() {
      return new Promise((resolve, reject) => {
          fetch('/Petitions/' + parseInt(this.props.match.params.id))
          .then( response => response.json())
          .then( petitions =>
              this.setState(
                  {petitions: petitions
                  }
              );
              resolve("Success!");
              )
           .catch(err => {
               reject("Failed!")
           })
        }
      )
          fetch('/Petitions/' + parseInt(this.props.match.params.id))
          .then( response => response.json())
          .then( petitions =>
              this.setState(
                  {petitions: petitions},
                  this.getSignatures
              ),
            )
  }*/

  componentDidMount() {
          fetch('/Petitions/' + parseInt(this.props.match.params.id))
          .then( response => response.json())
          .then( petitions =>
              this.setState(
                  {petitions: petitions},
                  this.getSignatures
              ),
            )
/*        .then(getSignatures)
        .then(getNames)*/
//      var today = new Date();
//      day = today.getFullYear() + '-' + (today.getMonth()) + '-' + today.getDate();
  }

  addSignature = event => {
      event.preventDefault();
//      var today = new Date();
      this.setState(
        {signaturePetition: this.state.petitions[0].petition_id,
        // Need to get ID of signed in user
         signatureUser: 1,
//         signatureDate: today.getFullYear() + '-' + (today.getMonth()) + '-' + today.getDate(),
        }, function(){
              var signature = {
                'petition_id': this.state.signaturePetition,
                'user_id': this.state.signatureUser,
//                'date': this.state.signatureDate,
              };

//              window.alert(JSON.stringify(signature));

              fetch('/Signatures/', {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(signature)
              })
              .then(response => {
                    console.log(response, 'Signature added!');
//                    window.location.reload();
                    window.alert("Successfully signed petition!");
              })
              .catch(err => {
                    console.log(err, 'Signature not added, try again');
              });
        }
      );
  }

  /*
  this is the feature of the share buttons on social media
  */

  render() {
    console.log("hi");
    
    return (
      <div className="ExamplePetition">
        <FormGroup>
          {this.state.petitions.map(petition =>
            <div key={petition.petition_id}>
                <h1> {petition.title} </h1>
                <h3> {petition.description} </h3>
                <div className="SignButton">
                    <Button type="submit" bsStyle="success" onClick={this.addSignature}>Sign</Button>
                </div>
            </div>)
           }
           {this.state.names}
         
        </FormGroup>

      </div>
    );
  }
}

export default ExamplePetition;
