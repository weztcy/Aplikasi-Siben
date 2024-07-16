import React from "react";
const BannerPhoto = ({ imageUrl, altText, title }) => {
  const imageStyle = {
    width: "100%",
    height: "340px",
    objectFit: "cover",
  };

  return <img src={imageUrl} alt={altText} style={imageStyle} />;
};

export default BannerPhoto;