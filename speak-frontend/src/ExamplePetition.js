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
          signatureUser: 0,
          signatureDate: "",
      };
      this.componentDidMount = this.componentDidMount.bind(this);
      this.addSignature = this.addSignature.bind(this);

  }
  
  componentDidMount() {
      var today = new Date();
//      da = today.getFullYear() + '-' + (today.getMonth()) + '-' + today.getDate();
      fetch('/Petitions/1')
/*      .then( function(response) {
          window.alert(JSON.stringify(response));
      });*/
      .then( response => response.json())
      .then( petitions => 
          this.setState(
              {petitions: petitions,
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
/*      this.state.petitions.map(petition =>
        window.alert(JSON.stringify(petition.id)),
      )*/
      var today = new Date();
//      window.alert(JSON.stringify(this.state.petitions[0].id));
      this.setState(
        {signaturePetition: 3,
        // Need to get ID of signed in user
         signatureUser: -2,
         signatureDate: today.getFullYear() + '-' + (today.getMonth()) + '-' + today.getDate(),
        }, function(){
              var signature = {
                'petition_id': this.state.signaturePetition,
                'user_id': this.state.signatureUser,
                'date': this.state.signatureDate,
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
          <h1>  
          Example Petition
          </h1>
          {this.state.petitions.map(petition =>
            <div key={petition.id}>
                <h2> {petition.title} </h2>
                <h3> {petition.description} </h3>
                <div className="SignButton">
                    <Button type="submit" bsStyle="success" onClick={this.addSignature}>Sign</Button>
                </div>
            </div>)
/*            this.setState(
                {signaturePetition: petition.id,
                 signatureUser: petition.owner,
                 signatureDate: today.getFullYear() + '-' + (today.getMonth()) + '-' + today.getDate(),
                }
            )*/
           }
        </FormGroup>
      </div>
    );
  }
}

export default ExamplePetition;