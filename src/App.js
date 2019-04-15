
import React, { Component } from 'react';
import HomePage from './pages/HomePage.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import UserProfilePage from './pages/UserProfilePage.js';
import { Route } from "react-router-dom"
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUpModal from './components/SignUpModal'
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: '',
      modal: false,
      users: [],
    }
  }

  componentDidMount() {
    axios.get('https://insta.nextacademy.com/api/v1/users')
      .then(result => {
        this.setState({
          users: result.data,
        })
      })
      .catch(error => {
        console.log('ERROR: ', error)
      })
  }

  render() {
    const { users } = this.state


    return (
      < div >
        <Header currentUser={this.state.currentUser} />
        <Route exact path='/' component={props => <HomePage {...props} users={users} />} />
        <Route path={`/user/:id`} component={props => <UserProfilePage {...props} users={users} />} />
        <Route exact path='/signUp' component={SignUpModal} />
      </div >
    )

  }
}

export default App;
