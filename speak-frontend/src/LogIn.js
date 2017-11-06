import React, { Component } from 'react';
import './LogIn.css';
import { FormGroup, Form, Col, Row, ControlLabel, FormControl, Checkbox,Button, Grid } from 'react-bootstrap';

class LogIn extends Component {

  render() {
    return (
      <div className="LogIn">
      <h1> Log in </h1>
      <h4> Don't have an account? <a href="/signup">Sign up.</a></h4> 
      <Form horizontal>
      <Grid>
      <Row>
    <FormGroup controlId="formHorizontalEmail">
      <Col componentClass={ControlLabel} sm={2}>
        Email
      </Col>
      <Col sm={10}>
        <FormControl type="email" placeholder="Email" />
      </Col>
    </FormGroup>

    <FormGroup controlId="formHorizontalPassword">
      <Col componentClass={ControlLabel} sm={2}>
        Password
      </Col>
      <Col sm={10} Offset={2}>
        <FormControl type="password" placeholder="Password" />
      </Col>
    </FormGroup>

    <FormGroup>
      <Col smOffset={2} sm={10} >
        <Checkbox>Remember me</Checkbox>
      </Col>
    </FormGroup>

    <FormGroup>
      <Col smOffset={2} sm={10} Offset={2}>
        <Button type="submit">
          Log in
        </Button>
      </Col>
    </FormGroup>
    </Row>
  </Grid>
  </Form>
</div>

    );
  }



}
export default LogIn
