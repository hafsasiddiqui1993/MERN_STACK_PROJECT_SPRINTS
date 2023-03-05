import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

 function OffCanvas() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className='offcnvs' variant="primary" onClick={handleShow}>
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Welcome to Dashboard</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
       <ul className='act1'> Activities
        <li>Add Activity</li>
        <li>Edit Activity</li>
        <li>Delete Activity</li>
       </ul>

       <ul className='act1'> Track Activity Progress
      
       </ul>


        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default OffCanvas