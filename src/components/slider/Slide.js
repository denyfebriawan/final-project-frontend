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

<div className="slide" style={{ margin: '100px' }}>
<Slider {...settings}>
{datas.map((d) => {
return <SliderContainer
key={d._id}
image={`https://final-project-backend-e55mlgzkc-lansilvester.vercel.app/${d.image}`}
title={d.title}
description={d.description}/>
})}
</Slider>
</div>
);
}

export default PauseOnHover;