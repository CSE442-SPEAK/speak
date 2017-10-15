import React, { Component } from 'react';
//import axios from 'axios';
import './CreatePetition.css';
import { FormGroup, Grid, Row, Col, Button, ControlLabel, FormControl } from 'react-bootstrap';
/*import TitleForm from './TitleForm';
import DescriptionForm from './DescriptionForm';
import MinimumForm from './MinimumForm';
import CreateButton from './CreateButton';*/

class CreatePetition extends Component {
    
  constructor(props) {
      super(props);
      this.handleTitle = this.handleTitle.bind(this);
      this.handleDescription = this.handleDescription.bind(this);
      this.handleSignatureGoal = this.handleSignatureGoal.bind(this);
      this.state = {
          title: "",
          description: "",
          signatureGoal: "",
      };
  }
  
  handleTitle(event) {
      this.setState({
        title: event.target.value });
//      window.alert(event.target.value)
  }
  
  handleDescription(event) {
      this.setState({
        description: event.target.value });
  }
  
  handleSignatureGoal(event) {
      this.setState({
          signatureGoal: event.target.value });
  }
  addPetition = event => {
      event.preventDefault();
     
      this.setState({
          title: event.target.value,
          description: event.target.value,
          signatureGoal: event.target.value
      });
      var petition = {
        'title': this.state.title,
        'description': this.state.description,
        'owner': '2',
        'signature_goal': this.state.signatureGoal
      };
      
      window.alert(JSON.stringify(petition));
/*      axios.post('/Petitions/', {
            title: this.state.title,
            description: this.state.description,
            owner: '2',
            signature_goal: this.state.signatureGoal,
      })*/
      fetch('/Petitions/', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(petition)
      })
      .then(response => {
            console.log(response, 'Petition added!');
      })
      .catch(err => {
            console.log(err, 'Petition not added, try again');
      });
        
  }
  
  render() {
    return (
      <div className="CreatePetition">
        <Grid>
            <Row classname="show-grid">
                <Col xs={12} md={8} xsOffset={2}>
                    <FormGroup>
                        <div className="TitleForm">
                            <ControlLabel>Petition Title</ControlLabel>
                            <FormControl
                              type="text"
                              placeholder="Title"
                              bsSize="large"
                              onChange={this.handleTitle}
                            />
                            <FormControl.Feedback />
                        </div>
                        <div className="DescriptionForm">
                            <ControlLabel>Petition description</ControlLabel>
                            <FormControl
                                componentClass="textarea"
                                placeholder="Description"
                                bsSize="large"
                                onChange={this.handleDescription}
                            />
                        </div>
                        <div className="MinimumForm">
                            <ControlLabel>Minimum number of signatures required</ControlLabel>
                            <FormControl
                              type="text"
                              placeholder="Integer value"
                              bsSize="large"
                              onChange={this.handleSignatureGoal}
                            />
                        </div>
                        <Button classname="createPetition"
                            type="submit"
                            onClick={this.addPetition}
                            bsStyle="success"
                        > Submit Your Petition </Button>
                    </FormGroup>
                </Col>
            </Row>
        </Grid>
      </div>
    );
  }
}

export default CreatePetition;
