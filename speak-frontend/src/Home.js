import React from 'react';
import { Grid, Row, Col, Button} from 'react-bootstrap';
import './Home.css';
import PetitionList from './PetitionList';
import Banner from './Banner';

const Home = () => (
  <div className="Home">
      <Banner/>
      <PetitionList/>
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
