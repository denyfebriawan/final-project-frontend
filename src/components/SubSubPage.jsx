import React from 'react';

const SubSubPage = ({ image, title, description, handleClick }) => {
  const imageHeight = window.innerHeight * (8/10);
  const imageWidth = window.innerWidth * (6/10);

  return (
    <div className='container'>
      <img src={image} alt={title} style={{ height: imageHeight, width: imageWidth,}} />
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={handleClick}>Pesan Tiket</button>
    </div>
  );
};

export default SubSubPage;