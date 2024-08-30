import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import { Facts3 } from "components/blocks/facts";
import { Banner3 } from "components/blocks/banner";
import { Pricing1 } from "components/blocks/pricing";
import { Contact3 } from "components/blocks/contact";
import { Process6 } from "components/blocks/process";
import { Services8 } from "components/blocks/services";

export default function Services() {
  return (
    <Fragment>
      {/* ========== page title section ========== */}
      <section className="wrapper bg-soft-primary">
        <div className="container pt-10 pb-19 pt-md-14 pb-md-20 text-center">
          <div className="row">
            <div className="col-md-8 col-lg-7 col-xl-6 col-xxl-5 mx-auto mb-11">
              <h1 className="display-1 mb-3">Our Services</h1>
              <p className="lead px-lg-7 px-xl-7 px-xxl-6">
                We are a creative company that focuses on establishing
                <span className="underline">long-term relationships</span> with customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="wrapper bg-light angled upper-end">
        <div className="container pb-14 pb-md-16">
          {/* ========== facts section ========== */}
          <div className="row mb-8">
            <div className="col-12 mt-n20">
              <figure className="rounded">
                <img src="/img/photos/about5.jpg" srcSet="/img/photos/about5@2x.jpg 2x" alt="" />
              </figure>
              <Facts3 />
            </div>
          </div>

          {/* ========== what we do section ========== */}
          <Services8 />

          {/* ========== how we do section ========== */}
          <Process6 />
        </div>
      </section>

      {/* ========== banner section ========== */}
      <Banner3 />

      <section className="wrapper bg-light angled upper-end">
        <div className="container py-14 py-md-16">
          {/* ========== pricing section ========== */}
          <Pricing1 roundShape bulletBg />

          {/* ========== let's talks section ========== */}
          <Contact3 />
        </div>
      </section>
    </Fragment>
  );
}
