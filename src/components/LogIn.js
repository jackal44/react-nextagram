import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios'

export default class Login extends React.Component {

  state = {
    email: '',
    password: '',
  }

  handleSubmit = event => {
    event.preventDefault()

    if (this.state.email && this.state.password) {
      axios.post('https://insta.nextacademy.com/api/v1/login', {
        email: this.state.email,
        password: this.state.password,
      })
        .then(response => {
          console.log(response.data)
          localStorage.setItem('jwt', response.data.auth_token)
          sessionStorage.setItem('clickCount', 10)
        })
        .catch(error => {
          console.log(error)
        })
      this.forceUpdate();

    }
    else {
      alert('Please complete your details')
    }

    console.log(this.state.email)
    console.log(this.state.password)
  }

  handleInput = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  render() {
    return (
      <div className="signUpFormContainer">
        <h3>Your one and only social media website</h3>
        <Form className="signUpForm" onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input type="email" onChange={this.handleInput} name="email" id="exampleEmail" placeholder="Please enter an email" />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input type="password" onChange={this.handleInput} name="password" id="examplePassword" placeholder="Please enter a password" />
          </FormGroup>

          <Button>Submit</Button>
        </Form>
      </div>
    );

  }
}

