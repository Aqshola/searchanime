import React, {Component} from 'react'
import { Modal, ModalBody, ModalFooter, Button } from 'react-bootstrap';
import ModalHeader from 'react-bootstrap/esm/ModalHeader';



class Modals extends Component {
    render(){
        return(
            <Modal show={this.props.show} >
                <ModalHeader>
                    <h2>Details</h2>
                </ModalHeader>
                <ModalBody>
                    <p>{this.props.data.synopsis}</p>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={this.props.hide}>close</Button>
                </ModalFooter>
            </Modal>
        )
    }
}

export default Modals