import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./index.scss";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        pagination={true}
        
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="carousel"
      >
        <SwiperSlide>
          <img src="https://wallpapercave.com/wp/wp8451143.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://th.bing.com/th/id/R.87c4632fe21265c748a36d55625e68db?rik=BobzwEPqdPVs9w&riu=http%3a%2f%2fimages2.fanpop.com%2fimage%2fphotos%2f12800000%2fInception-Banner-inception-2010-12831726-2000-919.jpg&ehk=vbT3fLpSwhlbe%2f5LQTiUVQOC%2bQdWLlogknzYzOXw8BE%3d&risl=&pid=ImgRaw&r=0"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
