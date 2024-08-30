import CountUp from "components/reuseable/CountUp";
// CUSTOM ICON COMPONENTS
import Medal from "icons/solid-duo/Medal";
import Target from "icons/solid-mono/Target";
import Employees from "icons/solid-mono/Employees";

export default function Facts18() {
  return (
    <section className="wrapper bg-gradient-blend">
      <div className="container pt-15 pt-md-17 pb-12 pb-md-18">
        <div className="row gx-lg-8 gx-xl-12 gy-10 gy-lg-0">
          <div className="col-lg-4 text-center text-lg-start">
            <h3 className="display-3 mb-3 pe-xxl-15">
              I am <em>proud</em> of my results
            </h3>
            <p className="lead fs-lg mb-0 pe-xxl-10">I bring solutions to make life easier for our customers.</p>
          </div>

          <div className="col-lg-8 mt-lg-2">
            <div className="row align-items-center counter-wrapper gy-6 text-center">
              <div className="col-md-4">
                <Target className="icon-svg-sm solid-duo text-purple-aqua mb-3" />
                <h3 className="counter">
                  <CountUp end={1000} suffix="+" />
                </h3>
                <p className="mb-0">Completed Projects</p>
              </div>

              <div className="col-md-4">
                <Medal className="icon-svg-sm solid-duo text-purple-aqua mb-3" />
                <h3 className="counter">
                  <CountUp end={12} />
                </h3>
                <p className="mb-0">Awards Won</p>
              </div>

              <div className="col-md-4">
                <Employees className="icon-svg-sm solid-duo text-purple-aqua mb-3" />
                <h3 className="counter">
                  <CountUp end={99.7} suffix="%" decimals={1} />
                </h3>
                <p className="mb-0">Customer Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-hidden">
        <div className="divider text-light mx-n2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 92.26">
            <path
              fill="currentColor"
              d="M1206,21.2c-60-5-119-36.92-291-5C772,51.11,768,48.42,708,43.13c-60-5.68-108-29.92-168-30.22-60,.3-147,27.93-207,28.23-60-.3-122-25.94-182-36.91S30,5.93,0,16.2V92.26H1440v-87l-30,5.29C1348.94,22.29,1266,26.19,1206,21.2Z"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
