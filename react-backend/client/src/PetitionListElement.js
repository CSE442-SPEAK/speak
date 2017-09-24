import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import SignButton from './SignButton';

class PetitionListElement extends Component {

  render() {
    return (
      <div className="PetitionListElement">
        <Panel collapsible header={this.props.title}>
          <p>description.....</p>
          <SignButton/>
        </Panel>
      </div>
    );
  }
}

export default PetitionListElement;
