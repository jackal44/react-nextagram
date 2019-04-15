import React, { Component } from 'react';

import '../App.css';
import axios from 'axios'

import Image from "react-graceful-image";

class UserImages extends Component {
    constructor(props) {
        super(props)
        this.state = {
            images: []
        }

    }

    componentDidMount() {
        axios.get(`https://insta.nextacademy.com/api/v1/images?userId=${this.props.id}`)
            .then(result => {
                this.setState({
                    images: result.data,
                })
                console.log('I have responded')
            })
            .catch(error => {
                console.log('ERROR: ', error)
            })
        console.log('Hello')
    }




    render(props) {
        const { images } = this.state



        return (
            <div>

                {this.state.images.map((image, index) => {
                    return (
                        <Image src={image} key={index} alt="upload" className="image"
                            alt="My awesome image"
                            retry={{ count: 10, delay: 2 }} />
                    )
                })}
            </div>

        )
    }
}



export default UserImages;

