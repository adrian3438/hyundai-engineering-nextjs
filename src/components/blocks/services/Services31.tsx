import { Fragment } from "react";
// CUSTOM DATA
import { features } from "data/demo-29";

export default function Services31() {
  return (
    <Fragment>
      <div className="row text-center">
        <div className="col-lg-10 col-xl-9 col-xxl-8 mx-auto position-relative">
          <img
            src="/img/svg/doodle3.svg"
            className="h-11 position-absolute d-none d-lg-block"
            style={{ top: "-45%", left: "23%" }}
            alt=""
          />
          <img
            src="/img/svg/doodle4.svg"
            className="h-8 position-absolute d-none d-lg-block"
            style={{ top: "6%", right: "2%" }}
            alt=""
          />
          <h2 className="fs-16 text-uppercase text-muted mb-3">App Features</h2>
          <h3 className="display-3 mb-11 px-lg-5 px-xl-0 px-xxl-6">
            Sandbox makes your spending <span className="text-gradient gradient-7">stress-free</span> for you to have
            the perfect control.
          </h3>
        </div>
      </div>

      <div className="row mb-20">
        <div className="col-xxl-11 mx-auto">
          <div className="row gx-md-8 gy-10 text-center">
            {features.map(({ Icon, title, color, id }) => (
              <div className="col-md-6 col-lg-3" key={id}>
                <div className={`svg-bg svg-bg-lg bg-pale-${color} rounded-xl mb-4`}>
                  <Icon />
                </div>

                <h4 className="fs-20">{title}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}
