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

    const destination = this.props.name;
    console.log(destination);

    return (
      <div className="slide" style={{ margin: '100px' }}>
        <Slider {...settings}>
          
          {destination?.map(data => {
            return <SliderContainer
            image={`https://final-project-backend-e55mlgzkc-lansilvester.vercel.app/${data.image}`}
            title={data.title}
            description={data.description}
            key={data._id}
          />
          })}
        </Slider>
      </div>
    );
  }
}
