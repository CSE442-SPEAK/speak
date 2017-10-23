import React from 'react';
import { Grid, Row, Col, Button} from 'react-bootstrap';
import './Home.css';
import PetitionList from './PetitionList';
import Banner from './Banner';

const Home = () => (
  <div className="Home">
      <Banner/>
      <Grid>
      <Row>
      <Col xs={12} xsOffset={2} md={8}>
      <PetitionList/>
      </Col>
      </Row>
      </Grid>
      <Button classname="reportBug"
          type="submit"
          href="https://github.com/CSE442-SPEAK/speak/issues"
          bsStyle="success"
      > Report Bug </Button>    
      <Button classname="submitFeedback"
          type="submit"
          href="https://goo.gl/forms/nOOMUQiaAcuxLxs02"
          bsStyle="success"
      > Submit Feedback </Button>         
  </div>
);

export default Home;
