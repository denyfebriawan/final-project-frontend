import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slide.css";
import SliderContainer from "./SlideContainer";

export default class PauseOnHover extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true,
      arrows: false,
    };
    return (
      <div className="slide" style={{ margin: '100px' }}>
        <Slider {...settings}>
          <SliderContainer
            image="/path/to/image.jpg"
            title="Card Title 1"
            description="This is a description of the card ."
          />
          <SliderContainer
            image="/path/to/image.jpg"
            title="Card Title 2"
            description="This is a description of the card ."
          />
          <SliderContainer
            image="/path/to/image.jpg"
            title="Card Title 3"
            description="This is a description of the card ."
          />
          <SliderContainer
            image="/path/to/image.jpg"
            title="Card Title 4"
            description="This is a description of the card ."
          />
          <SliderContainer
            image="/path/to/image.jpg"
            title="Card Title 5"
            description="This is a description of the card ."
          />
        </Slider>
      </div>
    );
  }
}
