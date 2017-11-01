import React, { Component } from 'react';
import './LogIn.css';
import { FormGroup, Form, Col, Row, ControlLabel, FormControl, Checkbox,Button, Grid } from 'react-bootstrap';

class About extends Component{

	render(){
		return (
			<div className ="About">
				<h1>About Us</h1>
				<p>A student run web app, that lets you create and sign petitions!!!</p>
			</div>
			);
	}
}

export default About