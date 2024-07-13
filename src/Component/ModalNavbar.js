import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function ModalNavbar({ show, onHide, title, bodyText, buttonText }) {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>{bodyText}</div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={onHide}>
          {buttonText}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalNavbar;
