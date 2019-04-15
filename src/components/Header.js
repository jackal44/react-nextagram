import React, { Component } from 'react';
import SignUpModal from './SignUpModal'
import LoginModal from './LoginModal'
import { Link } from "react-router-dom"


import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

export default class Example extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }


    handleLogout = (event) => {
        event.preventDefault()
        localStorage.removeItem("jwt")
        this.forceUpdate()
    }
    render() {
        return (
            <div >
                {!localStorage.jwt ?
                    <Navbar color="light" light expand="md">
                        <NavbarBrand tag={Link} to='/' >Nextagram</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <div>
                                    <NavItem>
                                        <NavLink > <LoginModal /></NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink><SignUpModal /></NavLink>
                                    </NavItem>
                                </div>
                            </Nav>
                        </Collapse>
                    </Navbar>
                    :
                    <Navbar color="light" light expand="md">
                        <NavbarBrand tag={Link} to='/' >Nextagram</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <div>
                                    <NavItem>
                                        <NavLink > My profile</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink onClick={this.handleLogout}><button>Logout</button></NavLink>
                                    </NavItem>
                                </div>
                            </Nav>
                        </Collapse>
                    </Navbar>}
            </div>
        );
    }
}