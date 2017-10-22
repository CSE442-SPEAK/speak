import React, { Component } from 'react';
import { FormGroup, Button } from 'react-bootstrap';
import SignButton from './SignButton';
import './ExamplePetition.css';

class ExamplePetition extends Component {

  constructor(props) {
      super(props);
      this.state = {
          petitions: [],
//          signatures: [],
          signaturePetition: 0,
          signatureUser: 0
//          signatureDate: "",
      };
      this.componentDidMount = this.componentDidMount.bind(this);
      this.addSignature = this.addSignature.bind(this);

  }

  componentDidMount() {
//      var today = new Date();
//      day = today.getFullYear() + '-' + (today.getMonth()) + '-' + today.getDate();
      fetch('/Petitions/' + parseInt(this.props.match.params.id))
      .then( response => response.json())
      .then( petitions =>
          this.setState(
              {petitions: petitions
              }
          )
       );
/*      fetch('/Signatures')
      .then( response => response.json())
      .then( petitions =>
          this.setState(
              {petitions}
          )
       );       */
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

              window.alert(JSON.stringify(signature));

              fetch('/Signatures/', {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(signature)
              })
              .then(response => {
                    console.log(response, 'Signature added!');
                    window.location.reload();
                    window.alert("Successfully signed petition!");
              })
              .catch(err => {
                    console.log(err, 'Signature not added, try again');
              });
        }
      );



  }

  render() {
    console.log("hi")

    return (
      <div className="ExamplePetition">
        <FormGroup>
          {this.state.petitions.map(petition =>
            <div key={petition.petition_id}>
                <h1> {petition.title} </h2>
                <h3> {petition.description} </h3>
                <div className="SignButton">
                    <Button type="submit" bsStyle="success" onClick={this.addSignature}>Sign</Button>
                </div>
            </div>)
           }
        </FormGroup>
      </div>
    );
  }
}

export default ExamplePetition;
