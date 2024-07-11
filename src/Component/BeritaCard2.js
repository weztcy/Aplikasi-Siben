import React from "react";
import Card from "react-bootstrap/Card";
import PropTypes from 'prop-types';

function BeritaCard2({ date, title, imageUrl, author, linkUrl }) {
  return (
    <Card style={{ width: '50rem', margin: 'auto', marginBottom: '50px' }}>
      <a href={linkUrl} style={{ textDecoration: 'none', color: 'inherit' }}>
        <div style={{ position: 'relative', width: '100%', paddingTop: '50%' }}>
          <Card.Img
            variant="top"
            src={imageUrl}
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        <Card.Header style={{ fontSize: "13px", textAlign: "right" }}>{date}</Card.Header>
        <Card.Body style={{ textAlign: "justify" }}>
          <blockquote className="blockquote mb-0">
            <p style={{ fontSize: "20px" }}>
              {title}
            </p>
            <footer className="blockquote-footer" style={{ fontSize: "13px" }}>
              {author}
            </footer>
          </blockquote>
        </Card.Body>
      </a>
    </Card>
  );
}

BeritaCard2.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  linkUrl: PropTypes.string.isRequired,
};

export default BeritaCard2;
