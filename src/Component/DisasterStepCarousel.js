import React from "react";
import PropTypes from "prop-types";

function DisasterStepCarousel({ text, imageUrl, title, description }) {
  return (
    <div className="carousel-image">
      <img
        src={imageUrl}
        alt={text}
        className="d-block w-100"
        style={{ borderRadius: "20px" }}
      />
      <div className="carousel-caption">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

DisasterStepCarousel.propTypes = {
  text: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default DisasterStepCarousel;