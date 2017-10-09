import React, { Component } from 'react';
import { FormGroup } from 'react-bootstrap';
import SignButton from './SignButton';
import './ExamplePetition.css';

class ExamplePetition extends Component {

  render() {
    return (
      <div className="SignPetition">
        <FormGroup>
          <h1>  
          New Parking Garage
	  </h1>
	  <p>
	     Petition to create a parking garage at UB North Campus instead of a new stadium!
	  </p>
          <SignButton/>
        </FormGroup>
      </div>
    );
  }
}

export default ExamplePetition;
