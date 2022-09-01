import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const ModalComponent = ({ isOpen, toggle }) => (
  <Modal isOpen={isOpen} toggle={() => toggle(!isOpen)}>
    <ModalHeader toggle={() => toggle(!isOpen)}>Licencia</ModalHeader>
    <ModalBody>
      <img src="/static/images/licencia.jpg" alt="Licencia" />
    </ModalBody>
    <ModalFooter>
      <Button color="secondary" onClick={() => toggle(!isOpen)}>
        Zavrieť
      </Button>
    </ModalFooter>
  </Modal>
);

export default ModalComponent;
