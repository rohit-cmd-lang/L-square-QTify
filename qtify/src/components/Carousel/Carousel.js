import React, { useEffect } from "react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { Swiper, useSwiper, SwiperSlide } from "swiper/react";
import styles from "./Carousel.module.css";
import CarouselLeft from "./CarouselLeft/CarouselLeft";
import CarouselRight from "./CarouselRight/CarouselRight";
import { SliderRoot } from "@mui/material";

const Controls = ({ data }) => {
  let swiper = useSwiper();

  useEffect(() => {
    swiper.slideTo(0, 1);
  }, [data]);

  return <></>;
};

const Carousel = ({ data, renderCardComponent }) => {
  return (
    <div className={styles.wrapper}>
      <Swiper
        initialSlide={0}
        modules={{ Navigation }}
        spaceBetween={40}
        allowTouchMove
        breakpoints={{
          320: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 5,
          },
          1280: {
            slidesPerView: 6,
          },
          1440: {
            slidesPerView: 7,
          },
        }}
      >
        <Controls data={data} />
        <CarouselLeft />
        <CarouselRight />
        {data.map((item) => (
          <SwiperSlide>{renderCardComponent(item)}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
