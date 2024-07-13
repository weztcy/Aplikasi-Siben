import React from 'react';
import { Container } from 'react-bootstrap';

const BannerPhoto = ({ imageUrl, altText, title }) => {


  const imageStyle = {
    width: '100%',
    height: '350px',
    objectFit: 'cover'
  };

  return (
        <img src={imageUrl} alt={altText} style={imageStyle} />
  );
}

export default BannerPhoto;
