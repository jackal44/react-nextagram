
import React from 'react';
import Login from './LogIn'
import { Link } from 'react-router-dom'
import SignUpModal from './SignUpModal'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class LoginModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    render() {
        return (
            <div>
                <Button color="danger" onClick={this.toggle}>Login</Button>
                <Modal isOpen={this.state.modal} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}
                    toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Nextagram</ModalHeader>
                    <ModalBody>
                        <Login />
                    </ModalBody>
                </Modal>

            </div>
        );
    }
}
export default LoginModal;