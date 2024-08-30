import Link from "next/link";
// GLOBAL CUSTOM COMPONENTS
import Carousel from "components/reuseable/Carousel";

export default function Portfolio14() {
  return (
    <div className="container-fluid px-xl-0 pt-16 pt-md-18 pb-18 pb-md-20">
      <div className="swiper-container swiper-auto nav-color nav-bottom nav-far">
        <Carousel
          loop
          centeredSlides
          spaceBetween={40}
          pagination={false}
          slidesPerView="auto"
          className="overflow-visible">
          {Array.from({ length: 6 }).map((_, i) => (
            <figure className="rounded-xl shadow-xl" key={i}>
              <img src={`/img/photos/bp${i + 1}.jpg`} srcSet={`/img/photos/bp${i + 1}@2x.jpg 2x`} alt="" />

              <Link className="item-link" href="#">
                <i className="uil uil-arrow-up-right" />
              </Link>
            </figure>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
