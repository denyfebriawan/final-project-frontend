import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';

function MySlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [images, setImages] = useState([
    '/path/to/image1.jpg',
    '/path/to/image2.jpg',
    '/path/to/image3.jpg'
  ]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [currentIndex, images]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt="Slideshow image" />
          </div>
        ))}
      </Slider>
      <button onClick={() => setCurrentIndex((currentIndex - 1 + images.length) % images.length)}>Previous</button>
      <button onClick={() => setCurrentIndex((currentIndex + 1) % images.length)}>Next</button>
    </div>
  );
}

export default MySlideshow;