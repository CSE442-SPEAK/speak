import React, { Component } from 'react';
import axios from 'axios';
import { FormGroup } from 'react-bootstrap';
import SignButton from './SignButton';
import './ExamplePetition.css';

class ExamplePetition extends Component {
    
  constructor(props) {
      super(props);
      this.state = {
          title: "",
          description: "",
      };
      this.componentDidMount = this.componentDidMount.bind(this);

  }
  
  componentDidMount() {
      fetch('/Petitions/1')
      .then( function(response) {
          window.alert(JSON.stringify(response));
      });
/*      .then( response => response.json())
      .then( data => {
          this.setState({
              title: data.title,
              description: data.description,
          });
      });*/
  };
  
  render() {
    console.log("hi")
    return (
      <div className="ExamplePetition">
        <FormGroup>
          <h1>  
          Example Petition
          </h1>
          <h2>
          {this.state.title}
          {this.state.description}
          </h2>
          <SignButton/>
        </FormGroup>
      </div>
    );
  }
}

export default ExamplePetition;
