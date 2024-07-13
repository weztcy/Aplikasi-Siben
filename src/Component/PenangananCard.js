import React, { useState } from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

function PenangananCard({ imageSrc, title, text, link }) {
  const [hover, setHover] = useState(false); // State untuk menangani hover

  const cardStyle = {
    width: "600px",
    transition: "transform 0.2s ease-in-out", // Animasi perubahan transformasi
    transform: hover ? "scale(1.15)" : "scale(1)", // Efek zoom dengan scale 1.05 saat hover
    margin: "0 auto", // Memusatkan card secara horizontal
  };

  const imgStyle = {
    width: "220px",
  };

  const titleStyle = {
    marginTop: "20px",
    fontSize: "30px",
  };

  const textStyle = {
    marginTop: "25px",
    textAlign: "justify",
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
      <Link to={link} className="card-link" style={{ textDecoration: "none" }}>
        <Card
          style={cardStyle}
          className="mb-4"
          onMouseOver={() => setHover(true)}
          onMouseOut={() => setHover(false)}
        >
          <Card.Body>
            <Row>
              <Col xs={5}>
                <Card.Img variant="top" src={imageSrc} style={imgStyle} />
              </Col>
              <Col xs={7}>
                <Card.Title style={titleStyle}>{title}</Card.Title>
                <Card.Text style={textStyle}>{text}</Card.Text>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
}

PenangananCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default PenangananCard;
