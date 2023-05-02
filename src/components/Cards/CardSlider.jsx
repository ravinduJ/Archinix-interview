import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import images from "../../assets/images";
import CardBrand from "./CardBrand";

export default function CardSlider() {
  const cardSet = [];
  const imageSet = images.brands;

  for (let i = 0; i < imageSet.length; i++) {
    cardSet.push(
      <SwiperSlide key={`card-ele-${i}`}>
        <CardBrand bgImage={imageSet[i]} />
      </SwiperSlide>
    );
  }
  return (
    <div>
      <Swiper
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          540: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 35,
          },
        }}
        className="mySwiper"
        navigation={true}
        modules={[Navigation]}
      >
        {cardSet}
      </Swiper>
    </div>
  );
}