import React, { Component } from 'react';
import { Col, Panel, Accordion, Button } from 'react-bootstrap';
import './PetitionList.css';

class PetitionListElement extends Component {

  constructor(props) {
      super(props)
  }

  render() {

    return (
      <Col xs="4">
      <div className="PetitionListElement">
        <Accordion>
        <Panel collapsible header={this.props.title}>
          <p>{this.props.description}</p>
          <Button bsStyle="success" href ={'/petitions/'+this.props.id}>Learn More</Button>
        </Panel>
        </Accordion>
      </div>
      </Col>
    );
  }
}

export default PetitionListElement;
