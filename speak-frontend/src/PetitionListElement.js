import React, { Component } from 'react';
import { Panel, Button } from 'react-bootstrap';

import {
  Card,
  CardBlock,
  CardFooter,
  CardTitle,
  CardText,
  CardImg,
  CardBody,
  CardSubtitle
} from 'react-bootstrap-card';
import {
  Col,
  Row,
} from 'react-bootstrap';

import PropTypes from 'prop-types';

class PetitionListElement extends Component {

  constructor(props) {
      super(props)
  }

  render() {

    return (
      <div>
        <Card>
          <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
          <CardBody>
            <CardTitle>this.props.title</CardTitle>
            <CardSubtitle>Subtitle</CardSubtitle>
            <CardText>this.props.description</CardText>
            <Button bsStyle="success" hreft ={'/petitions'+this.props.id}>Learn More</Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default PetitionListElement;
