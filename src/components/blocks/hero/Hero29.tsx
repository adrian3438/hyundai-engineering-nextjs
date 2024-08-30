import Link from "next/link";

export default function Hero29() {
  return (
    <section
      className="wrapper image-wrapper bg-full bg-image bg-overlay bg-overlay-light-600"
      style={{ backgroundImage: "url(/img/photos/bg23.png)" }}>
      <div className="container pt-16 pt-md-18 pb-9">
        <div className="row gx-0 gy-10 align-items-center text-center text-lg-start">
          <div
            className="col-lg-6 col-xxl-5 position-relative"
            data-cues="slideInDown"
            data-group="page-title"
            data-delay="700">
            <img
              data-cue="fadeIn"
              data-delay="3000"
              src="/img/svg/doodle1.svg"
              className="h-9 position-absolute d-none d-lg-block"
              style={{ top: "-9%", left: "-6%" }}
              alt=""
            />

            <img
              data-cue="fadeIn"
              data-delay="3000"
              src="/img/svg/doodle2.svg"
              className="h-15 position-absolute d-none d-lg-block"
              style={{ bottom: "9%", right: "-22%" }}
              alt=""
            />

            <h1 className="display-1 fs-50 mb-4">
              Manage all your bills, accounts and budgets in{" "}
              <span className="text-gradient gradient-7">one place.</span>
            </h1>

            <p className="lead fs-24 lh-sm mb-7">
              Sandbox is available to download from both App Store and Google Play Store.
            </p>

            <div
              data-delay="1800"
              data-cues="slideInDown"
              data-group="page-title-buttons"
              className="d-flex justify-content-center justify-content-lg-start">
              <span>
                <Link href="#" className="me-2">
                  <img src="/img/photos/button-appstore.svg" className="h-11 rounded-xl" alt="" />
                </Link>
              </span>

              <span>
                <Link href="#">
                  <img src="/img/photos/button-google-play.svg" className="h-11 rounded-xl" alt="" />
                </Link>
              </span>
            </div>
          </div>

          <div className="col-lg-6 ms-auto mb-n20 mb-xxl-n22" data-cues="slideInDown" data-delay="600">
            <figure>
              <img src="/img/photos/devices3.png" srcSet="/img/photos/devices3@2x.png 2x" alt="" />
            </figure>
          </div>
        </div>
      </div>

      <div className="overflow-hidden" style={{ zIndex: 1 }}>
        <div className="divider text-light mx-n2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100">
            <g fill="currentColor">
              <polygon points="1440 100 0 100 0 85 1440 0 1440 100" />
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}
