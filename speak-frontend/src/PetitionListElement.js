import React, { Component } from 'react';
import { Thumbnail, Button, Grid, Row, Col } from 'react-bootstrap';

class PetitionListElement extends Component {
    
  constructor(props) {
      super(props)
  }
  
  render() {
    // return (
    //   <CardDeck>
    //     <Card>
    //       <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
    //       <CardBody>
    //         <CardTitle>{this.props.title}</CardTitle>
    //         <CardSubtitle></CardSubtitle>
    //         <CardText>{this.props.description}</CardText>
    //         <Button bsStyle="success" href={'/petitions/'+this.props.id}>Learn more</Button>
    //       </CardBody>
    //     </Card>
    //   </CardDeck>
    // );
    return (
      <Grid>
      <Row>
          <Col xs={6} md={4}>
            <Thumbnail src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="242x200">
              <h3>{this.props.title}</h3>
              <p>{this.props.description}</p>
                <p>
                  <Button bsStyle="success" href={'/petitions/'+this.props.id}>Learn more</Button>
                </p>
            </Thumbnail>
            </Col>
            {/* <Col xs={6} md={4}>
              <Thumbnail src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="242x200">
                <h3>Thumbnail label</h3>
                <p>Description</p>
                <p>
                  <Button bsStyle="primary">Button</Button>&nbsp;
                </p>
              </Thumbnail>
            </Col> */}
            </Row>
        </Grid>
    );

    // return (
    //   <div className="PetitionListElement">
    //     <Panel collapsible header={this.props.title}>
    //       <p>{this.props.description}</p>
    //       <div className="LearnMoreButton">
    //         <Button bsStyle="success" href={'/petitions/'+this.props.id}>Learn more</Button>
    //       </div>
    //     </Panel>
    //   </div>
    // );

  }
}

export default PetitionListElement;
