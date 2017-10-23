import React, { Component } from 'react';
import { Panel, Button } from 'react-bootstrap';

class PetitionListElement extends Component {
    
  constructor(props) {
      super(props)
  }
  
  render() {
    
    return (
      <div className="PetitionListElement">
        <Panel collapsible header={this.props.title}>
          <p>{this.props.description}</p>
          <div className="LearnMoreButton">
            <Button bsStyle="success" href={'/petitions/'+this.props.id}>Learn more</Button>
          </div>
        </Panel>
      </div>
    );
  }
}

export default PetitionListElement;
