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
          <div><SliderContainer/></div>
          <div><SliderContainer/></div>
          <div><SliderContainer/></div>
        </Slider>
      </div>
    );
  }
}
