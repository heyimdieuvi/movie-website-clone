/* eslint-disable react/prop-types */
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./index.scss";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import axios from "axios";
import { useEffect, useState } from "react";

// set default value props = 1, can change other numbers
export default function Carousel({numberOfSlides = 1, category = 'Comedy'}) {
  const [movies, setMovies] = useState([]);
  const fetchMovies = async () => {
    const response = await axios.get('https://66f961f6afc569e13a989d9d.mockapi.io/Movies');
    setMovies(response.data);

  }
  useEffect(() => {
    fetchMovies();
  }, []); //load data lene lần đầu
  
  return (
    <>
      <Swiper
        slidesPerView={numberOfSlides}
        pagination={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="carousel"
      > 
      {/* filter in carousel */}
      {/* mapping each movie => SwiperSlide */}
      {movies.filter(movie => movie.category === category).map((movie) => (
        <SwiperSlide key={movie.id}>
          <img src={movie.poster_path} alt="" />
        </SwiperSlide>
      ))}
      </Swiper>
    </>
  );
}
