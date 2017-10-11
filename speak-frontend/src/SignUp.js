import React, { Component } from 'react';
import './SignUp.css';
import { FormGroup } from 'react-bootstrap';
import TitleForm from './TitleForm';
import DescriptionForm from './DescriptionForm';
import MinimumForm from './MinimumForm';

class SignUp extends Component {
    
  render() {
    return (
      <div className="SignUp">
        <FormGroup>
          <TitleForm/>
          <DescriptionForm/>
          <MinimumForm/>
        </FormGroup>
      </div>
    );
  }
}

export default SignUp;