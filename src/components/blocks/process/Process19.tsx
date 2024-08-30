import { Fragment } from "react";

// =================================================================
type ItemProps = { no: string; title: string; className?: string };
// =================================================================

const Item = ({ no, title, className = "" }: ItemProps) => {
  return (
    <div className={className}>
      <span className="fs-60 lh-1 mb-3 fw-normal text-gradient gradient-7">{no}</span>
      <h4 className="fs-20">{title}</h4>
      <p className="mb-0 px-xl-7">
        Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus.
      </p>
    </div>
  );
};

export default function Process19() {
  return (
    <Fragment>
      <div className="row text-center">
        <div className="col-md-10 col-lg-7 mx-auto position-relative">
          <img
            data-delay="1800"
            src="/img/svg/doodle5.svg"
            className="w-15 position-absolute d-none d-lg-block"
            style={{ bottom: "-60%", right: "10%" }}
            alt=""
          />

          <img
            data-delay="1800"
            src="/img/svg/doodle6.svg"
            className="h-15 position-absolute d-none d-lg-block"
            style={{ top: "-40%", left: "-5%" }}
            alt=""
          />

          <h2 className="fs-16 text-uppercase text-muted mb-3">How It Works</h2>
          <h3 className="display-3 mb-8 px-xl-6">
            Download the app, create your profile and <span className="text-gradient gradient-7">voilà</span>, you're
            all set!
          </h3>
        </div>
      </div>

      <div className="row mb-lg-20 mb-xl-23">
        <div className="col-xxl-11 mx-auto">
          <div className="row gy-10 gy-lg-0 text-center d-flex align-items-center">
            <div className="col-md-6 col-lg-4 mx-auto mb-n10 mb-lg-0">
              <figure className="mx-auto">
                <img src="/img/photos/devices4.png" srcSet="/img/photos/devices4@2x.png 2x" alt="" />
              </figure>
            </div>

            <div className="w-100 d-lg-none" />

            <div className="col-md-6 col-lg-4 order-lg-first">
              <Item no="01" title="Download Application" className="mb-8" />
              <Item no="02" title="Quick Registration" />
            </div>

            <div className="col-md-6 col-lg-4">
              <Item no="03" title="Track Your Spending" className="mb-8" />
              <Item no="04" title="Have Total Control" />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
