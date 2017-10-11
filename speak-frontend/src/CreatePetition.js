import React, { Component } from 'react';
import './CreatePetition.css';
import { FormGroup, Grid, Row, Col } from 'react-bootstrap';
import TitleForm from './TitleForm';
import DescriptionForm from './DescriptionForm';
import MinimumForm from './MinimumForm';
import CreateButton from './CreateButton';

class CreatePetition extends Component {
    
  constructor(props) {
      super(props);
      this.handleTitle = this.handleTitle.bind(this);
      this.handleDescription = this.handleDescription.bind(this);
      this.state = {
          title: "",
          description: "",
      };
  }
  
  handleTitle(event) {
      this.setState({
        title: event.target.value });
  }
  
  handleDescription(event) {
      this.setState({
        description: event.target.value });
  }
  
  addPetition = event => {
      event.preventDefault();
      this.setState({
          title: event.target.value,
          description: event.target.value,
      });
  }
  
  render() {
    return (
      <div className="CreatePetition">
        <Grid>
            <Row classname="show-grid">
                <Col xs={12} md={8} xsOffset={2}>
                    <FormGroup>
                        <TitleForm/>
                        <DescriptionForm/>
                        <MinimumForm/>
                        <CreateButton/>
                    </FormGroup>
                </Col>
            </Row>
        </Grid>
      </div>
    );
  }
}

export default CreatePetition;
