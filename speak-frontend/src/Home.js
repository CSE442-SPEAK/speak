import React from 'react';
import { Grid, Row, Col, Button} from 'react-bootstrap';
import './Home.css';
import PetitionList from './PetitionList';
import UsersList from './UsersList';
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
        <Row>
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
        </Row>
        <Row>
          <TwitterShareButton url={shareUrl} title={title} className="socialmedia">
            <TwitterIcon size={48} round />
          </TwitterShareButton>
          <FacebookShareButton url={shareUrl} className="socialmedia">
            <FacebookIcon size={48} round />
          </FacebookShareButton>
          <GooglePlusShareButton url={shareUrl} className="socialmedia">
            <GooglePlusIcon size={48} round />
          </GooglePlusShareButton>
         <EmailShareButton url={shareUrl} subject={title} body="body" className="socialmedia">
            <EmailIcon size={48} round />
         </EmailShareButton>
        </Row>
      </Grid>
  </div>
);

export default Home;
