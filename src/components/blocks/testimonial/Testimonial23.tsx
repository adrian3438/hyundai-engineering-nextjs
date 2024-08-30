"use client";

import { Fragment } from "react";
// GLOBAL CUSTOM HOOKS
import useIsotope from "hooks/useIsotope";
// CUSTOM DATA
import { testimonials } from "data/demo-29";

export default function Testimonial23() {
  useIsotope();

  return (
    <Fragment>
      <div className="row">
        <div className="col-md-11 col-lg-10 col-xl-9 col-xxl-8 mx-auto text-center position-relative">
          <img
            src="/img/svg/doodle1.svg"
            className="h-9 position-absolute d-none d-lg-block"
            style={{ top: "2%", left: "9%" }}
            alt=""
          />

          <img
            src="/img/svg/doodle10.svg"
            className="h-7 position-absolute d-none d-lg-block"
            style={{ top: "-45%", left: "-17%" }}
            alt=""
          />

          <img
            src="/img/svg/doodle11.svg"
            className="h-13 position-absolute d-none d-lg-block"
            style={{ top: "-40%", right: "-15%" }}
            alt=""
          />

          <h2 className="fs-16 text-uppercase text-muted mb-3">Happy Customers</h2>
          <h3 className="display-3 mb-11 px-xl-10 px-xxl-13">
            Don't take our word for it. See what <span className="text-gradient gradient-7">customers</span> are saying
            about us.
          </h3>
        </div>
      </div>

      <div className="grid mb-12">
        <div className="row isotope gy-6">
          {testimonials.map(({ designation, id, name, review, color }) => (
            <div className="item col-md-6 col-xl-4" key={id}>
              <div className={`card shadow-none rounded-xl bg-soft-${color}`}>
                <div className="card-body">
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
    </Fragment>
  );
}
