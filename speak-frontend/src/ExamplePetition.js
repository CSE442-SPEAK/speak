import React, { Component } from 'react';
import { FormGroup } from 'react-bootstrap';
import SignButton from './SignButton';
import './ExamplePetition.css';

class ExamplePetition extends Component {
    
  constructor(props) {
      super(props);
      this.state = {
          petitions: []
      };
      this.componentDidMount = this.componentDidMount.bind(this);

  }
  
  componentDidMount() {
      fetch('/Petitions/1')
/*      .then( function(response) {
          window.alert(JSON.stringify(response));
      });*/
      .then( response => response.json())
      .then( petitions => 
          this.setState(
              {petitions}
          )
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
            </div>)}
          <SignButton/>
        </FormGroup>
      </div>
    );
  }
}

export default ExamplePetition;
