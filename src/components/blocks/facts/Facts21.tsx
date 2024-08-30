import CountUp from "components/reuseable/CountUp";
// CUSTOM DATA
import { facts } from "data/demo-34";

export default function Facts21() {
  return (
    <section className="wrapper bg-gradient-primary">
      <div className="container pt-7 pt-md-10 pb-14 pb-md-17">
        <div className="row mb-8 text-center">
          <div className="col-md-11 col-lg-10 col-xl-8 col-xxl-7 mx-auto">
            <img src="/img/demos/icon.png" srcSet="/img/demos/icon@2x.png 2x" alt="" />
            <h2 className="display-3 mt-3 mb-3 mb-0 px-lg-10 px-xl-0">
              Save your time and money by choosing Sandbox for your website.
            </h2>
          </div>
        </div>

        <div className="row">
          <div className="col-xl-8 col-xxl-7 mx-auto">
            <div className="row align-items-center counter-wrapper gy-6 text-center">
              {facts.map(({ id, title, value }) => (
                <div className="col-md-4" key={id}>
                  <h3 className="counter fs-50 text-primary mb-1">
                    <CountUp end={value} suffix="+" />
                  </h3>

                  <p className="fs-18 mb-0">{title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
