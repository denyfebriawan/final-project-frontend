import React, { useRef, useState, useEffect } from "react";
import Axios from 'axios';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./slider2.css";
// import required modules
import { Pagination, Navigation } from "swiper";
// import card
import Card from '../Card';

const API_URL = 'https://final-project-backend-e55mlgzkc-lansilvester.vercel.app/v1/destination/posts';

const Sliderss = () => {
  const [data, setData] = useState([]);

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

  const settings = {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
    clickable: true,
    },
    navigation: true,
    modules: [Pagination, Navigation],
    className: "mySwiper"
    }
  
  return (
  <div className="container">
    <Swiper {...settings}>
      {data.map((item) => (
        <SwiperSlide key={item._id}>
          <Card
            image={`https://final-project-backend-e55mlgzkc-lansilvester.vercel.app/${item.image}`}
            title={item.title}
            description={item.description}/>
        </SwiperSlide>))}
    </Swiper>
  </div>
);
}
  export default Sliderss;