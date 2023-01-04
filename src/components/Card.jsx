import React from 'react';

const Card = ({ image, title, description }) => {
  const cardHeight = window.innerHeight / 2;
  const cardWidth = window.innerWidth * (3/10);
  const imageHeight = cardHeight / 3;
  const imageWidth = cardWidth;

  return (
    <div style={{ height: cardHeight, width: cardWidth }}>
      <img src={image} alt={title} style={{ height: imageHeight, width: imageWidth,}} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Card;