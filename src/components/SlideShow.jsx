import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';

function MySlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [images, setImages] = useState([
    'https://img.freepik.com/free-photo/beautiful-strawberry-garden-sunrise-doi-ang-khang-chiang-mai-thailand_335224-762.jpg?w=740&t=st=1672327318~exp=1672327918~hmac=708b467d60011a0fab141f75dd1ca0da2aa1f3fe004d75c316a8260345876ddd',
    '../assets/image/topfive/topfive_1.jpg',
    '../assets/image/topfive/topfive_2.jpg',
    '../assets/image/topfive/topfive_3.jpg',
    '../assets/image/topfive/topfive_4.jpg',
    '../assets/image/topfive/topfive_5.jpg'
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