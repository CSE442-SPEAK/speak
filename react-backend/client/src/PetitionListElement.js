import React, { Component } from 'react';
import { ListGroupItem } from 'react-bootstrap';

class PetitionListElement extends Component {

  render() {
    return (
      <div className="PetitionListElement">
        <ListGroupItem header={this.props.title}>description.....</ListGroupItem>
      </div>
    );
  }
}

export default PetitionListElement;
