import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalJoin() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        JOIN NOW
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ain't Register Yet?</Modal.Title>
        </Modal.Header>
        <Modal.Body>Sign-up to join activity, after joining it <br></br>You can see your progress <br></br>according to selected activities</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
     
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalJoin
// render(<ModalJoin />);

