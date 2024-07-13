import React from "react";
import PropTypes from "prop-types";

const BackgroundVideo = ({ src, loop, muted, autoPlay }) => {
  const videoStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -1,
    objectFit: "cover",
  };

  return (
    <video style={videoStyle} autoPlay={autoPlay} loop={loop} muted={muted}>
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

BackgroundVideo.propTypes = {
  src: PropTypes.string.isRequired,
  loop: PropTypes.bool,
  muted: PropTypes.bool,
  autoPlay: PropTypes.bool,
};

BackgroundVideo.defaultProps = {
  loop: true,
  muted: true,
  autoPlay: true,
};

export default BackgroundVideo;
