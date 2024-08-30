import { Fragment } from "react";
import Carousel from "components/reuseable/Carousel";
// CUSTOM DATA
import { testimonials } from "data/demo-32";

export default function Testimonial26() {
  return (
    <div className="row text-center">
      <div className="col-xl-9 mx-auto">
        <div className="card shadow-lg mt-md-n16 mb-15 mb-md-17">
          <div className="card-body p-9 p-xl-12">
            <div className="row gx-0">
              <div className="col-xxl-9 mx-auto">
                <div className="swiper-container dots-closer mb-6">
                  <Carousel navigation={false} slidesPerView={1}>
                    {testimonials.map(({ designation, id, name, review, image }) => (
                      <Fragment key={id}>
                        <span className="ratings five mb-3" />
                        <blockquote className="border-0 fs-lg mb-2">
                          <p>“{review}”</p>
                          <div className="blockquote-details justify-content-center">
                            <img
                              className="rounded-circle w-12"
                              src={`/img/avatars/${image}.jpg`}
                              srcSet={`/img/avatars/${image}@2x.jpg 2x`}
                              alt=""
                            />
                            <div className="info">
                              <h5 className="mb-1">{name}</h5>
                              <p className="mb-0">{designation}</p>
                            </div>
                          </div>
                        </blockquote>
                      </Fragment>
                    ))}
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
