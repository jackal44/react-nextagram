import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios'

export default class SignUp extends React.Component {

    state = {
        username: '',
        email: '',
        password: '',
        passwordRe: ''

    }

    handleSubmit = event => {
        event.preventDefault()
        if (this.state.password != this.state.passwordRe) {
            alert('Your password does not match')
        }
        else if (this.state.username && this.state.email && this.state.password && this.state.passwordRe) {
            axios.post('https://insta.nextacademy.com/api/v1/users/', {
                username: this.state.username,
                email: this.state.email,
                password: this.state.password,
            })
                .then(response => {
                    console.log(response)
                    alert('you have successfully registered, please proceed to login')
                }
                )
                .catch(error => {
                    console.log(error.response)
                    alert(error.response.data.message)
                })
        }
        else {
            alert('Please complete your details')
        }

        console.log(this.state.username)
        console.log(this.state.email)
        console.log(this.state.password)
        console.log(this.state.passwordRe)


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
                        <Label for="name">username</Label>
                        <Input type="text" onChange={this.handleInput} name="username" id="exampleName" placeholder="Your name " />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input type="email" onChange={this.handleInput} name="email" id="exampleEmail" placeholder="Please enter an email" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Password</Label>
                        <Input type="password" onChange={this.handleInput} name="password" id="examplePassword" placeholder="Please enter a password" />
                    </FormGroup>

                    <FormGroup>
                        <Label for="examplePassword">Re-enter Password</Label>
                        <Input type="password" onChange={this.handleInput} name="passwordRe" id="examplePassword" placeholder="Please enter a password" />
                    </FormGroup>

                    <Button>Submit</Button>
                </Form>
            </div>
        );

    }
}

