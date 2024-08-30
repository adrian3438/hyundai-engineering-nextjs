"use client";

import useIsotope from "hooks/useIsotope";
// CUSTOM DATA
import { testimonials } from "data/demo-33";

export default function Testimonial27() {
  // used for masionry layout
  useIsotope();

  return (
    <section className="section-frame mx-xxl-11">
      <div
        className="wrapper image-wrapper bg-image bg-cover bg-overlay bg-overlay-light-500 section-frame-wrapper"
        style={{ backgroundImage: "url(/img/photos/bg23.png)" }}>
        <div className="container py-16 py-md-18">
          <div className="row">
            <div className="col-md-10 col-lg-9 col-xl-8 mx-auto text-center">
              <h3 className="display-2 mb-10 px-xxl-10">
                Don't take our word for it. See what customers are saying about us.
              </h3>
            </div>
          </div>

          <div className="row">
            <div className="grid col-md-11 mx-auto mb-lg-n23">
              <div className="row isotope gy-6">
                {testimonials.map(({ designation, name, id, review }) => (
                  <div className="item col-md-6 col-xl-4" key={id}>
                    <div className="card shadow-lg">
                      <div className="card-body">
                        <span className="ratings five mb-3" />
                        <blockquote className="icon mb-0">
                          <p>“{review}”</p>
                          <div className="blockquote-details">
                            <div className="info ps-0">
                              <h5 className="mb-1">{name}</h5>
                              <p className="mb-0">{designation}</p>
                            </div>
                          </div>
                        </blockquote>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
