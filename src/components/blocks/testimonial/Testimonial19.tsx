import Carousel from "components/reuseable/Carousel";
// CUSTOM UTILS
import carouselBreakpoints from "utils/carouselBreakpoints";
// CUSTOM DATA
import { testimonialList7 } from "data/testimonial-list";

export default function Testimonial19() {
  return (
    <section id="testimonials">
      <div
        className="wrapper image-wrapper bg-image bg-overlay"
        style={{ backgroundImage: "url(/img/photos/bg35.jpg)" }}>
        <div className="container pt-15 pb-13">
          <h2 className="display-5 mb-4 text-center text-white">Happy Customers</h2>

          <div className="swiper-container dots-closer dots-light dots-light-75">
            <Carousel grabCursor spaceBetween={0} navigation={false} breakpoints={carouselBreakpoints}>
              {testimonialList7.map(({ id, name, designation, review }) => (
                <div className="item-inner" key={id}>
                  <div className="card border-0 bg-white-900">
                    <div className="card-body">
                      <span className="ratings five mb-3" />
                      <blockquote className="border-0 mb-0">
                        <p>“{review}”</p>
                        <div className="blockquote-details">
                          <div className="info p-0">
                            <h5 className="mb-0">{name}</h5>
                            <p className="mb-0">{designation}</p>
                          </div>
                        </div>
                      </blockquote>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
