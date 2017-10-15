import React, { Component } from 'react';
import { Panel, Button } from 'react-bootstrap';

class PetitionListElement extends Component {

  render() {
    return (
      <div className="PetitionListElement">
        <Panel collapsible header={this.props.title}>
          <p>{this.props.description}</p>
          <div className="LearnMoreButton">
            <Button bsStyle="success">Learn more</Button>
          </div>
        </Panel>
      </div>
    );
  }
}

export default PetitionListElement;
