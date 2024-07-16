import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./Slider.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

export default function Slider() {
  return (
    <>
      <div className="slider">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              className="slide"
              src="https://img.freepik.com/free-photo/bride-groom-having-their-wedding-beach_23-2149043953.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="slide"
              src="https://www.joshuadwain.com/wp-content/uploads/2022/04/the-breakers-069-wedding-photographer-joshua-dwain-black-west-palm-beach.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="slide"
              src="https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?cs=srgb&dl=pexels-emma-bauso-1183828-2253870.jpg&fm=jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="slide"
              src="https://media-api.xogrp.com/images/96f561ae-344a-41ed-98e8-1c24856977d9~rs_768.h"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="slide"
              src="https://i.pinimg.com/736x/80/0a/46/800a464ee34f45b06b9f0b25c8b70da0.jpg"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
