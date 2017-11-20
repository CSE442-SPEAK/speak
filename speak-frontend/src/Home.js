import React from 'react';
import { Grid, Row, Col, Button} from 'react-bootstrap';
import './Home.css';
import PetitionList from './PetitionList';
import Banner from './Banner';
import { ShareButtons, ShareCounts, generateShareIcon } from 'react-share';

const { TwitterShareButton, EmailShareButton, FacebookShareButton, GooglePlusShareButton } = ShareButtons;

const EmailIcon = generateShareIcon('email');
const GooglePlusIcon = generateShareIcon('google');
const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');

const shareUrl = 'https://speak-frontend.appspot.com/'
const title = 'Speak - UB Petitions'

const Home = () => (
  <div className="Home">
      <Banner/>
      <Grid>
        <Row>
          <Col xs={12}>
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
      <div className="socialmedia">
        <TwitterShareButton
            url={shareUrl}
            title={title}
            className="ExamplePetition">
            <TwitterIcon
              size={48}
              round />
          </TwitterShareButton>
        </div>
        <div className="socialmedia2">
          <FacebookShareButton
          url={shareUrl}
          className="ExamplePetition">
          <FacebookIcon
          size={48}
          round />
          </FacebookShareButton>
        </div>
        <div className="socialmedia3">
          <GooglePlusShareButton
            url={shareUrl}
            className="ExamplePetition">
          <GooglePlusIcon
          size={48}
          round />
          </GooglePlusShareButton>
        </div>
        <div className = "socialmedia4">
          <EmailShareButton
          url={shareUrl}
          subject={title}
          body="body"
          className="ExamplePetition">
          <EmailIcon
          size={48}
          round />
          </EmailShareButton>
        </div>
  </div>
);

export default Home;
