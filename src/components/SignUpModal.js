
import React from 'react';
import SignUp from './SignUp'
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';


class SignUpModal extends React.Component {
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
                <button color="danger" className="text" onClick={this.toggle}>Sign Up here </button>
                <Modal isOpen={this.state.modal} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}
                    toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Nextagram</ModalHeader>
                    <ModalBody>
                        <SignUp />
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default SignUpModal;