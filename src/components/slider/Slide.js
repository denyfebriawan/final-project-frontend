import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slide.css";
import SliderContainer from "./SlideContainer";
import Axios from "axios";

const API_URL = 'https://final-project-backend-e55mlgzkc-lansilvester.vercel.app/v1/destination/posts';

const PauseOnHover = () => {

const [datas, setData] = useState([]);

    useEffect(() => {
    Axios.get(API_URL)
    .then(result => {
    const responseAPI = result.data;
    setData(responseAPI.data);
    })
    .catch(err => {
    console.log('Error',err);
    })
    },[])

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
    <div className="slide " style={{ margin: '100px' }}>
    <Slider {...settings}>
        {datas.map((item) => {
        return <SliderContainer
            key={item._id}
            image={`https://img.freepik.com/free-photo/river-surrounded-by-forests-cloudy-sky-thuringia-germany_181624-30863.jpg?w=826&t=st=1674642474~exp=1674643074~hmac=000f741aae40b99fc71fdf05fec220ba53725440ea5d67b8998a3b1b26a8b359`}
            title={item.title}/>
            })}
        </Slider>
    </div>
    );
}

export default PauseOnHover;