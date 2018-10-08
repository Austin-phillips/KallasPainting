import React, { Component } from 'react';
import { Header, Button, Form } from 'semantic-ui-react';
import { connect } from 'react-redux';
import {sendEmail} from '../actions/email';
import axios from 'axios';
import { setFlash } from '../actions/flash';


class ContactUsForm extends Component {
  state = {
    first: '',
    last: '',
    email: '', 
    message: '',
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = (e) => {
    const { first, last, email, message } = this.state; 
    e.preventDefault();
    axios.post(`/api/send_email`, { first, last, email, message })
    console.log('How to clear state')
  }

  clearState = () => {
    console.log('Clear')
  }


  render() {
    return (
      <div>
        <Header as='h1' textAlign='center'>Contact Us</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths='equal'>
            <Form.Input
              label='First Name'
              name='first'
              autoFocus={true}
              required
              placeholder='First Name'
              onChange={this.handleChange}
            />
            <Form.Input
              label='Last Name'
              name='last'
              required
              placeholder='Last Name'
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Input
              label='Email'
              name='email'
              required
              placeholder='Email'
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.TextArea 
              label='Message'
              name='message'
              required
              placeholder='Message'
              onChange={this.handleChange}
            />
          </Form.Group>
          <Button color='blue' type='submit'>Submit</Button>
        </Form>
          <Button color='blue' onClick={() => this.clearState()}>Clear</Button>
      </div>
    )
  }
}

export default ContactUsForm;