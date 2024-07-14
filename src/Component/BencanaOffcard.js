import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

function BencanaOffcard({ name, scroll, backdrop, title, text }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  return (
    <>
      <Button variant="primary" onClick={toggleShow} style={{width:"100%", height:"50px"}}>
        {name}
      </Button>
      <Offcanvas
        show={show}
        onHide={handleClose}
        scroll={scroll}
        backdrop={backdrop}
        style={{textAlign:"justify", padding:"20px", width:"450px", backgroundColor:"#383838", color:"white"}}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{title}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body dangerouslySetInnerHTML={{ __html: text }} />
      </Offcanvas>
    </>
  );
}

export default BencanaOffcard;
