import React from 'react';
import {FormGroup, FormControl, Button, Label} from 'react-bootstrap';

class MainForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: ''	
		}
	}


	render() {
		return (
			<div className="MainForm">
				<div className="Instructions">
					<h2><Label>Input the website you'd like to crawl</Label></h2>
				</div>
				<div className="Input">
					<FormGroup bsSize="large">
						<FormControl type="text" />
					</FormGroup>
					<Button bsSize="large" bsStyle="primary" type="submit">
						Crawl!
					</Button>
				</div>
			</div>
		)
	}
}

export default MainForm;