import React, { Component } from 'react';
import { FormGroup, Button, Table } from 'react-bootstrap';
import SignButton from './SignButton';
import './ExamplePetition.css';
import { Grid, Row, Col} from 'react-bootstrap';

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
          fetch('https://speak-182609.appspot.com/Signatures/petition_id/' + this.props.match.params.id)
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
                fetch('https://speak-182609.appspot.com/Users/' + signature.user_id)
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
      fetch('https://speak-182609.appspot.com/Petitions/' + parseInt(this.props.match.params.id))
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

              fetch('https://speak-182609.appspot.com/Signatures/', {
                  method: 'POST',
                  headers: {
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

        </FormGroup>
      </div>
    );
  }
}

export default ExamplePetition;
