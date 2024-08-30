import { Fragment } from "react";
import Carousel from "components/reuseable/Carousel";

export default function Clients6() {
  const carouselProps = {
    className: "swiper pe-none",
    slideClassName: "swiper-slide px-5",
    wrapperClass: "swiper-wrapper ticker",
    speed: 5000,
    spaceBetween: 30,
    pagination: false,
    navigation: false,
    autoplay: { delay: 1 },
    breakpoints: {
      0: { slidesPerView: 3 },
      576: { slidesPerView: 3 },
      768: { slidesPerView: 4 },
      992: { slidesPerView: 5 },
      1200: { slidesPerView: 6 },
      1400: { slidesPerView: 7 }
    }
  };

  return (
    <Fragment>
      <h2 className="fs-16 text-uppercase text-muted mb-8 text-center">Trusted by over 5000 clients</h2>

      <div className="swiper-container clients mb-19">
        <Carousel {...carouselProps}>
          {Array.from({ length: 11 }).map((_, i) => (
            <img src={`/img/brands/c${i + 1}.png`} alt="" key={i} />
          ))}
        </Carousel>
      </div>
    </Fragment>
  );
}
