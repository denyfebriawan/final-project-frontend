import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slide.css";
import SlideContainer from "./SlideContainer";
// import SlideContainer2 from "./SlideContainer";
// import SlideContainer3 from "./SlideContainer";

export default class PauseOnHover extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      arrows: false,
      // nextArrow: <SampleNextArrow />,
      // prevArrow: <SamplePrevArrow />,
    };
    // function SamplePrevArrow(props) {
    //   const { className, style, onClick } = props;
    //   return (
    //     <div
    //       className={className}
    //       style={{
    //         ...style,
    //         display: "block",
    //         background: "white",
    //         width: "2rem",
    //         height: "2rem",
    //         padding: "0.5rem",
    //       }}
    //       onClick={onClick}
    //     />
    //   );
    // }
    // function SampleNextArrow(props) {
    //   const { className, style, onClick } = props;
    //   return (
    //     <div
    //       className={className}
    //       style={{ ...style, display: "block", background: "green" }}
    //       onClick={onClick}
    //     />
    //   );
    // }
    return (
      <div className="slide">
        <Slider {...settings}>
          <div>
            <div src={SlideContainer} alt="slider" />
          </div>
          <div>
            <div src={SlideContainer} alt="slider" />
          </div>
          <div>
            <div src={SlideContainer} alt="slider" />
          </div>
          <div>
            <img src={SlideContainer} alt="slider" />
          </div>
          <div>
            <img src={SlideContainer} alt="slider" />
          </div>
          <div>
            <img src={SlideContainer} alt="slider" />
          </div>
        </Slider>
      </div>
    );
  }
}
