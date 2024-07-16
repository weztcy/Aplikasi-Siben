import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function ModalNavbar({ show, onHide, title, bodyText, buttonText }) {
  return (
    <Modal show={show} onHide={onHide} size="lg">
      <Modal.Header closeButton className="bg-success text-white">
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="p-5">
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