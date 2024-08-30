import Carousel from "components/reuseable/Carousel";
import FigureImage from "components/reuseable/FigureImage";
// CUSTOM DATA
import { testimonialList3 } from "data/testimonial-list";

export default function Testimonial13() {
  return (
    <section
      className="wrapper image-wrapper bg-image bg-overlay bg-overlay-300 text-white"
      style={{ backgroundImage: "url(/img/photos/bg2.jpg)" }}>
      <div className="container py-14 py-md-17">
        <h2 className="display-4 mb-5 text-white text-center">Happy Customers</h2>

        <div className="row">
          <div className="col-md-10 col-lg-8 mx-auto">
            <div className="swiper-container dots-light dots-closer text-center mb-6">
              <Carousel slidesPerView={1} navigation={false} grabCursor>
                {testimonialList3.map(({ name, image, designation, review, id }) => (
                  <blockquote className="border-0 fs-lg mb-0" key={id}>
                    <p>“{review}”</p>
                    <div className="blockquote-details justify-content-center">
                      <FigureImage
                        src={image}
                        width={100}
                        height={100}
                        className="rounded-circle w-12 overflow-hidden"
                      />
                      <div className="info">
                        <h6 className="mb-1 text-white">{name}</h6>
                        <p className="mb-0">{designation}</p>
                      </div>
                    </div>
                  </blockquote>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
