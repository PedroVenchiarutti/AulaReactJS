import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./style.css";

// import required modules
import { Pagination } from "swiper";

const Carrosel = ({ repos }) => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {repos.map((repo) => (
          <div className="container-carrosel">
            <SwiperSlide key={repo.id}>{repo.name}</SwiperSlide>
          </div>
        ))}
      </Swiper>
    </>
  );
};

export default Carrosel;
