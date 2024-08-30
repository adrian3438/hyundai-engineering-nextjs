import { Fragment } from "react";
// CUSTOM DATA
import { abouts } from "data/demo-29";

export default function About30() {
  return (
    <Fragment>
      <div className="row text-center">
        <div className="col-md-11 col-lg-9 col-xl-8 col-xxl-7 mx-auto position-relative">
          <img
            src="/img/svg/doodle3.svg"
            className="h-11 position-absolute d-none d-lg-block"
            style={{ top: "-20%", right: "-12%" }}
            alt=""
          />

          <img
            src="/img/svg/doodle9.svg"
            className="h-17 position-absolute d-none d-lg-block"
            style={{ bottom: "5%", left: "-17%" }}
            alt=""
          />

          <h2 className="fs-16 text-uppercase text-muted mb-3 text-center">Why Choose Sandbox?</h2>

          <h3 className="display-3 mb-12 text-center">
            Here are a few <span className="text-gradient gradient-7">reasons why</span> our customers choose the
            Sandbox app.
          </h3>
        </div>
      </div>

      <div className="row d-flex align-items-start mb-19">
        <div className="col-lg-6 position-lg-sticky" style={{ top: "8rem" }}>
          <figure>
            <img src="/img/photos/devices5.png" srcSet="/img/photos/devices5@2x.png 2x" alt="" />
          </figure>
        </div>

        <div className="col-lg-5 ms-auto">
          {abouts.map(({ Icon, id, title, description, color }) => (
            <div className="d-flex flex-row mb-8" key={id}>
              <div>
                <div className={`svg-bg svg-bg-lg bg-pale-${color} rounded-xl me-5`}>
                  <Icon />
                </div>
              </div>

              <div>
                <h4 className="fs-20">{title}</h4>
                <p>{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
}
