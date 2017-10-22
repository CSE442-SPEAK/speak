import React from 'react';
import { Grid, Row, Col} from 'react-bootstrap';
import './Home.css';
import PetitionList from './PetitionList';
import Petitions from './Petitions';
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
  </div>
);

export default Home;
