import React, { Component } from 'react';
import './SignUp.css';
import { Grid, FormGroup, Form, Col, Row, ControlLabel, FormControl, Checkbox, Button, HelpBlock } from 'react-bootstrap';
import TitleForm from './TitleForm';
import DescriptionForm from './DescriptionForm';
import MinimumForm from './MinimumForm';

function FieldGroup({ id, label, help, ...props }) {
    return (
        <FormGroup controlId={id}>
        <ControlLabel>{label}</ControlLabel>
        <FormControl {...props} />
        {help && <HelpBlock>{help}</HelpBlock>}
        </FormGroup>
    );
}

class SignUp extends Component {
  
  render() {
    return (
      <div className="SignUp">
        <Grid>
        <form>
            <Row className="name">
                <Col md={6} mdPush={6}>
                  <FieldGroup
                    id="formControlsText"
                    type="text"
                    label="Last Name"
                    placeholder="Enter your last name"
                  />
                </Col>
                <Col md={6} mdPull={6}>
                  <FieldGroup
                    id="formControlsText"
                    type="text"
                    label="First Name"
                    placeholder="Enter your first name"
                  />
                </Col>
            </Row>
          <FieldGroup
            id="formControlsEmail"
            type="email"
            label="Email Address"
            placeholder="Enter email"
          />
          <FieldGroup
            id="formControlsPassword"
            label="Password"
            type="password"
          />

          <Button type="submit">
            Submit
          </Button>
        </form>
        </Grid>
      </div>
    );
  }
}

export default SignUp;