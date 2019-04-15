import React, { Component } from 'react';
import axios from 'axios'
import picture from './spinner.gif'
import Image from "react-graceful-image";

class Loading extends Component {
    state = {
        loading: true
    }

    componentDidMount() {

        axios.get('https://insta.nextacademy.com/api/v1/users')
            .then(result => {
                this.setState({
                    users: result.data,
                    loading: false
                })
            })
            .catch(error => {
                console.log('ERROR: ', error)
            })
    }

    render() {
        if (this.state.loading) {
            return (
                <Image
                    src={picture}
                    width="250"
                    height="250"
                    style={{ padding: "20px" }}

                />
            );
        }
        else {
            return null
        }
    }
}
export default Loading