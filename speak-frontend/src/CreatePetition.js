import React, { Component } from 'react';
import axios from 'axios';
import './CreatePetition.css';
import { FormGroup, Grid, Row, Col, Button } from 'react-bootstrap';
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
      axios.post('/petitions/', {
            title: this.state.title,
            description: this.state.description,
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
                        <TitleForm onChange={this.handleTitle}/>
                        <DescriptionForm onChange={this.handleDescription}/>
                        <MinimumForm/>
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
