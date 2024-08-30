import { Fragment } from "react";

export default function Facts20() {
  return (
    <Fragment>
      <div className="row text-center mb-7">
        <div className="col-lg-10 col-xl-9 col-xxl-8 mx-auto">
          <h2 className="fs-16 text-uppercase text-muted mb-3">Join Our Community</h2>
          <h3 className="display-2 ls-sm">
            We are{" "}
            <span className="underline-3 style-1 primary">
              <em>trusted</em>
            </span>{" "}
            by over 50000+ clients. Join them now and grow your business.
          </h3>
        </div>
      </div>

      <div className="row mb-8">
        <div className="col-md-10 col-lg-9 col-xl-7 mx-auto">
          <div className="row align-items-center counter-wrapper gy-4 gy-md-0">
            <div className="col-md-4 text-center">
              <h3 className="counter counter-lg text-primary">1000+</h3>
              <p>Completed Projects</p>
            </div>

            <div className="col-md-4 text-center">
              <h3 className="counter counter-lg text-primary">50K+</h3>
              <p>Happy Customers</p>
            </div>

            <div className="col-md-4 text-center">
              <h3 className="counter counter-lg text-primary">4x</h3>
              <p>Revenue Growth</p>
            </div>
          </div>
        </div>
      </div>

      <div className="row position-relative" style={{ zIndex: 1 }}>
        <div className="col-lg-10 col-xl-9 mx-auto mt-11 mb-sm-n20 mb-md-n22">
          <figure>
            <img
              alt=""
              className="img-fluid"
              src="/img/illustrations/i32.png"
              srcSet="/img/illustrations/i32@2x.png 2x"
            />
          </figure>
        </div>
      </div>
    </Fragment>
  );
}
