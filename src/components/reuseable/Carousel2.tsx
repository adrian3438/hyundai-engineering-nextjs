"use client";

import { Fragment, useState } from "react";

import type Swiper from "swiper";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper as SwiperCarousel, SwiperSlide } from "swiper/react";

export default function Carousel2() {
  const [thumbsSwiper, setThumbsSwiper] = useState<Swiper>();
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);

  const slideImages = [
    { id: 1, url: "/img/photos/bg28.jpg" },
    { id: 2, url: "/img/photos/bg29.jpg" },
    { id: 3, url: "/img/photos/bg30.jpg" },
    { id: 4, url: "/img/photos/bg31.jpg" }
  ];

  const thumbImages = [
    { id: 1, url: "/img/photos/bg28-th.jpg" },
    { id: 2, url: "/img/photos/bg29-th.jpg" },
    { id: 3, url: "/img/photos/bg30-th.jpg" },
    { id: 4, url: "/img/photos/bg31-th.jpg" }
  ];

  return (
    <Fragment>
      <SwiperCarousel
        spaceBetween={10}
        pagination={false}
        navigation={{ prevEl, nextEl }}
        modules={[FreeMode, Navigation, Thumbs]}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}>
        {slideImages.map(({ url, id }) => (
          <SwiperSlide
            key={id}
            style={{ backgroundImage: `url(${url})` }}
            className="bg-overlay bg-overlay-400 bg-dark bg-image"
          />
        ))}
      </SwiperCarousel>

      {/* CUSTOM NAVIGATION */}
      <div className="swiper-controls">
        <div className="swiper-navigation">
          <div role="button" ref={(node) => setPrevEl(node)} className="swiper-button swiper-button-prev" />
          <div role="button" ref={(node) => setNextEl(node)} className="swiper-button swiper-button-next" />
        </div>
      </div>

      {/* THUMBS CAROUSEL NAVIGATION */}
      <SwiperCarousel
        freeMode
        threshold={2}
        spaceBetween={10}
        slidesPerView={5}
        watchSlidesProgress
        onSwiper={setThumbsSwiper}
        modules={[FreeMode, Navigation, Thumbs]}>
        {thumbImages.map(({ url, id }) => (
          <SwiperSlide key={id}>
            <img src={url} alt="product" />
          </SwiperSlide>
        ))}
      </SwiperCarousel>
    </Fragment>
  );
}
