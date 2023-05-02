import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Box } from "@mui/material";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../assets/scss/swiperCommon.scss"
import "../../assets/scss/carousel.scss";

// import required modules
import { Navigation, Pagination } from "swiper";
import images from "../../assets/images";

export default function App() {
  return (
    <Box className="main-slider" sx={{ position: "relative", color: "red" }}>
      <Swiper
        navigation={true}
        pagination={{
          el: ".swiper-custom-pagination",
        }}
        modules={[Navigation, Pagination]}
        draggable={true}
        className="mySwiper"
        loop={true}
      >
        {images.slider?.map((image, index) => {
          return (
            <SwiperSlide key={index}>
              <Box>
                <Box sx={{ height: { xs: "250px", sm: "250px", md: "350px" } }}>
                  <img
                    className="carousel-back-bg"
                    src={image}
                    alt="logo"
                  />
                </Box>
              </Box>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="outside-pagination">
        <div className="swiper-custom-pagination" />
      </div>
    </Box>
  );
}