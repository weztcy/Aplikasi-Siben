import React, { useRef, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";

function PageCard({
  cardTitle,
  cardText,
  videoUrl,
  linkTo,
  modalTitle,
  modalContent,
}) {
  const videoRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Error playing video:", error);
      });
      videoRef.current.loop = true;
    }
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.loop = false;
    }
    setIsHovered(false);
  };

  const handleLinkClick = (event) => {
    event.stopPropagation();
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  };

  const handleNavigate = () => {
    handleCloseModal();
  };

  return (
    <>
      <Card
        style={{
          width: "19rem",
          height: "470px",
          transition: "transform 0.2s ease",
          transform: isHovered ? "scale(1.1)" : "scale(1)",
          borderRadius: "25px 10px 25px 10px",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Link
          to={linkTo}
          style={{
            textDecoration: "none",
            color: "inherit",
            display: "block",
          }}
        >
          <video
            ref={videoRef}
            autoPlay
            muted
            width="80%"
            height="80%"
            style={{ objectFit: "cover" }}
          >
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <Card.Body
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Card.Title>{cardTitle}</Card.Title>
            <Card.Text>{cardText}</Card.Text>
          </Card.Body>
        </Link>
        {linkTo && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "55px",
              marginBottom: "20px",
            }}
          >
            <Button
              variant="primary"
              onClick={handleLinkClick}
              className="btn-sm"
              style={{ width: "30%", height: "40px" }}
            >
              Detail
            </Button>
          </div>
        )}
      </Card>
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header
          closeButton
          className="bg-primary"
          style={{ color: "white" }}
        >
          <Modal.Title>{modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-4" style={{ textAlign: "justify" }}>
          {modalContent}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleCloseModal}>
            Tutup
          </Button>
          <Button variant="primary">
            <Link
              to={linkTo}
              onClick={handleNavigate}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Lihat Selengkapnya
            </Link>
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PageCard;