import React, { Component } from 'react';
import './CreatePetition.css';
import { FormGroup } from 'react-bootstrap';
import TitleForm from './TitleForm';
import DescriptionForm from './DescriptionForm';
import MinimumForm from './MinimumForm';
import CreateButton from './CreateButton';

class CreatePetition extends Component {

  render() {
    return (
      <div className="CreatePetition">
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

export default CreatePetition;
