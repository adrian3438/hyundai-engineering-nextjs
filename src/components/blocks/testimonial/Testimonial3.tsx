import { Fragment } from "react";
import { Tiles3 } from "components/elements/tiles";
import Carousel from "components/reuseable/Carousel";
import { TestimonialCard2 } from "components/reuseable/testimonial-cards";
// CUSTOM DATA
import { testimonialList2 } from "data/testimonial-list";

export default function Testimonial3() {
  return (
    <Fragment>
      <h3 className="display-4 mb-3 text-center">What People Say About Us</h3>
      <p className="lead fs-lg mb-10 text-center">
        Don't take our word for it. See what customers are saying about us.
      </p>

      <div className="row gx-lg-8 gx-xl-12 gy-6 mb-14 align-items-center">
        <div className="col-lg-7">
          <Tiles3 />
        </div>

        <div className="col-lg-5 mt-5">
          <div className="swiper-container dots-closer mb-6">
            <Carousel grabCursor slidesPerView={1} navigation={false}>
              {testimonialList2.map((item, i) => (
                <TestimonialCard2 key={i} {...item} />
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
