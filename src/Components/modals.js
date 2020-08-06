import React, { Component } from "react"
import { Modal, ModalBody, ModalFooter, Button } from "react-bootstrap"
import ModalHeader from "react-bootstrap/esm/ModalHeader"

class Modals extends Component {
  render() {
    const { loading, show, hide, data } = this.props
    if (loading) {
      return (
        <Modal show={show} centered>
          <ModalHeader>
            <h2>Details</h2>
          </ModalHeader>
          <ModalBody>
            <h4>Loading...</h4>
          </ModalBody>
          <ModalFooter>
            <Button onClick={hide}>close</Button>
          </ModalFooter>
        </Modal>
      )
    }
    return (
      <Modal show={show}>
        <ModalHeader>
          <h2>Details</h2>
        </ModalHeader>
        <ModalBody>
          <p className="modal-desc">{data.synopsis}</p>
        </ModalBody>
        <ModalFooter>
          <Button onClick={hide}>close</Button>
        </ModalFooter>
      </Modal>
    )
  }
}

export default Modals
