import React, { useRef, useState } from "react";
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

export default function Sliderss() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Card
            image="/path/to/image.jpg"
            title="Card Title 1"
            description="This is a description of the card ."
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            image="/path/to/image.jpg"
            title="Card Title 2"
            description="This is a description of the card ."
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            image="/path/to/image.jpg"
            title="Card Title 3"
            description="This is a description of the card ."
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            image="/path/to/image.jpg"
            title="Card Title 4"
            description="This is a description of the card ."
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            image="/path/to/image.jpg"
            title="Card Title 5"
            description="This is a description of the card ."
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            image="/path/to/image.jpg"
            title="Card Title 6"
            description="This is a description of the card ."
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            image="/path/to/image.jpg"
            title="Card Title 7"
            description="This is a description of the card ."
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            image="/path/to/image.jpg"
            title="Card Title 8"
            description="This is a description of the card ."
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            image="/path/to/image.jpg"
            title="Card Title 9"
            description="This is a description of the card ."
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            image="/path/to/image.jpg"
            title="Card Title 10"
            description="This is a description of the card ."
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            image="/path/to/image.jpg"
            title="Card Title 11"
            description="This is a description of the card ."
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            image="/path/to/image.jpg"
            title="Card Title 12"
            description="This is a description of the card ."
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
