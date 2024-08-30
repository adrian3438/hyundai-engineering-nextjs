import Carousel from "../Carousel";
import TestimonialCard2 from "./TestimonialCard2";
// CUSTOM DATA
import { testimonialList2 } from "data/testimonial-list";

// ============================================================
interface TestimonialCard4Props {
  className?: string;
  sliderWrapperClassname?: string;
}
// ============================================================

export default function TestimonialCard4({
  className = "",
  sliderWrapperClassname = "p-10 p-md-11 p-lg-13"
}: TestimonialCard4Props) {
  return (
    <div className={`card shadow-lg ${className}`}>
      <div className="row gx-0">
        <div
          style={{ backgroundImage: "url(/img/photos/tm1.jpg)" }}
          className="col-lg-6 image-wrapper bg-image bg-cover rounded-top rounded-lg-start"
        />

        <div className="col-lg-6">
          <div className={sliderWrapperClassname}>
            <div className="swiper-container dots-closer mb-4">
              <Carousel grabCursor slidesPerView={1} navigation={false}>
                {testimonialList2.map((item, i) => (
                  <TestimonialCard2 key={i} {...item} />
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
