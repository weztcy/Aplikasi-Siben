import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import ModalNavbar from "./ModalNavbar";
import Button from "react-bootstrap/Button";

function NavigationBar() {
  const [modalShow, setModalShow] = useState(false);

  const handleShow = () => setModalShow(true);
  const handleClose = () => setModalShow(false);

  return (
    <>
      <style type="text/css">
        {`
          .navbar-nav .nav-item.dropdown:hover .dropdown-menu {
            display: block;
            margin-top: 0;
          }
        `}
      </style>
      <Navbar expand="lg" className="bg-body-tertiary justify-content-center">
        <Container className="d-flex justify-content-center">
          <Navbar.Brand as={Link} to="/home">
            Siaga Bencana
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="d-flex justify-content-center"
          >
            <Nav>
              <Nav.Link as={Link} to="/home" className="mx-3">
                Home
              </Nav.Link>
              <NavDropdown
                title="Penanganan Bencana"
                id="basic-nav-dropdown"
                className="mx-3 nav-item"
              >
                <NavDropdown.Item as={Link} to="/gempa-bumi">
                  Gempa Bumi
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/tsunami">
                  Tsunami
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/gunung-meletus">
                  Gunung Meletus
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/banjir">
                  Banjir
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/tanah-longsor">
                  Tanah Longsor
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/angin-topan">
                  Angin Topan
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/kekeringan">
                  Kekeringan
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/kebakaran-hutan">
                  Kebakaran Hutan
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/gelombang-panas">
                  Gelombang Panas
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/badai-petir">
                  Badai Petir
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/penanganan">
                  Lihat Selengkapnya
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/data" className="mx-3">
                Data Bencana
              </Nav.Link>
              <Nav.Link as={Link} to="/berita" className="mx-3">
                Berita Bencana
              </Nav.Link>
              <Nav.Link as={Link} to="/cuaca" className="mx-3">
                Ramalan Cuaca
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Button variant="success" onClick={handleShow}>
            Klik Untuk Informasi
          </Button>
          <ModalNavbar
            show={modalShow}
            onHide={handleClose}
            title="Informasi Website Siben"
            bodyText={
              <>
                <p style={{ textAlign: "center" }}>Halo Selamat datang!!</p>
                <br />
                <p style={{ textAlign: "justify" }}>
                  Website siaga bencana ini kami dedikasikan sebagai platform
                  untuk menghadirkan informasi terkini mengenai bencana. Kami
                  menyediakan akses cepat dan akurat terhadap data-data terbaru
                  seputar bencana alam, langkah-langkah mitigasi, serta berita
                  terkini untuk membantu masyarakat dalam menghadapi dan
                  mempersiapkan diri menghadapi bencana.
                </p>
                <p style={{ textAlign: "justify", marginTop: "10px" }}>
                  Dengan fokus pada keterbukaan informasi dan pendekatan
                  edukatif, kami berkomitmen untuk menjadi sumber informasi yang
                  andal dan membantu membangun ketahanan komunitas. Mari
                  bersama-sama menjadi lebih siaga dan tanggap terhadap setiap
                  potensi bencana.
                </p>
              </>
            }
            buttonText="Saya mengerti"
          />
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;