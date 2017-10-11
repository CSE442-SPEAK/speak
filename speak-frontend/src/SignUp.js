import React, { Component } from 'react';
import './SignUp.css';
import { FormGroup } from 'react-bootstrap';
import TitleForm from './TitleForm';
import DescriptionForm from './DescriptionForm';
import MinimumForm from './MinimumForm';
//import CreateButton from './CreateButton';

class SignUp extends Component {
    
  render() {
    return (
      <div className="SignUp">
        <FormGroup>
          <TitleForm/>
          <DescriptionForm/>
          <MinimumForm/>
          <CreateButton/>
        </FormGroup>
      </div>
    );
  }
}

export default SignUp;