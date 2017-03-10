import React from 'react';
import {FormGroup, FormControl, Button, Label} from 'react-bootstrap';

class MainForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: '',
			valid: true
		}
		this.handleChange = this.handleChange.bind(this);
		this.getValidationState = this.getValidationState.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		this.setState({value: e.target.value, valid: (this.getValidationState() === 'success')})
	}

	getValidationState() {
		if (this.state.value.length <= 0) return null
		//TODO use a lib to validate input as url
	    return (this.state.value.match(/((http|https):\/\/www\.)?.+\..+/) ) ? 'success' : 'error';
  	}

  	handleSubmit(e) {
  		e.preventDefault();
  		console.log(this.state.value);
  	}

	render() {
		return (
			<div className="MainForm">
				<div className="Instructions">
					<h2><Label>Input the website you'd like to crawl</Label></h2>
				</div>
				<div className="Input">
					<form onSubmit={this.handleSubmit}>
						<FormGroup bsSize="large" validationState={this.getValidationState()}>
							<FormControl 
								type="text"
								value={this.state.value}
								placeholder="e.g. google.com"
								onChange={this.handleChange} />
							<FormControl.Feedback />
								
						</FormGroup>
						<Button bsSize="large" bsStyle="primary" type="submit" onClick={this.handleSubmit} disabled={!this.state.valid}>
							Crawl!
						</Button>
					</form>
				</div>
			</div>
		)
	}
}

export default MainForm;