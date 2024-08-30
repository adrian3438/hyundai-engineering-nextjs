"use client";

import useProgressbar from "hooks/useProgressbar";

export default function About33() {
  useProgressbar();

  return (
    <section className="wrapper bg-light">
      <div className="container py-15 py-md-17">
        <div className="row gx-md-8 gy-10 align-items-center">
          <div className="col-lg-6 offset-lg-1 order-lg-2 position-relative">
            <figure className="rounded">
              <img className="img-fluid" src="/img/photos/about27.jpg" srcSet="/img/photos/about27@2x.jpg 2x" alt="" />
            </figure>

            <div className="card shadow-lg position-absolute d-none d-md-block" style={{ top: "15%", left: "-7%" }}>
              <div className="card-body py-4 px-5">
                <div className="d-flex flex-row align-items-center">
                  <div>
                    <div className="icon btn btn-block btn-soft-primary pe-none mx-auto me-4 w-10 h-10">
                      <i className="uil uil-users-alt" />
                    </div>
                  </div>

                  <div>
                    <h3 className="fs-25 counter mb-0 text-nowrap">25000+</h3>
                    <p className="fs-16 lh-sm mb-0 text-nowrap">Happy Clients</p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="card shadow-lg position-absolute text-center d-none d-md-block"
              style={{ bottom: "10%", left: "-10%" }}>
              <div className="card-body p-6">
                <div className="progressbar semi-circle primary mb-3" data-value="80" />
                <h4 className="mb-0">Time Saved</h4>
              </div>
            </div>
          </div>

          <div className="col-lg-5">
            <h2 className="fs-16 text-uppercase text-primary mb-3">What Makes Us Different?</h2>
            <h3 className="display-3 mb-5">We make spending stress free so you have the perfect control.</h3>
            <p className="mb-6">
              Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper nulla non metus auctor fringilla. Morbi
              leo risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac cursus. Integer posuere
              erat a ante venenatis.
            </p>

            <ul className="icon-list bullet-bg bullet-soft-primary">
              <li>
                <i className="uil uil-check" />
                Aenean eu leo quam. Pellentesque ornare.
              </li>

              <li>
                <i className="uil uil-check" />
                Nullam quis risus eget urna mollis ornare.
              </li>

              <li>
                <i className="uil uil-check" />
                Donec id elit non mi porta gravida at eget.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
