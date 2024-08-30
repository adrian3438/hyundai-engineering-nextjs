import Link from "next/link";

export default function CTA11() {
  return (
    <section
      className="wrapper image-wrapper bg-full bg-image bg-overlay bg-overlay-light-600"
      style={{ backgroundImage: "url(/img/photos/bg23.png)" }}>
      <div className="overflow-hidden" style={{ zIndex: 1 }}>
        <div className="divider divider-alt text-light mx-n2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100">
            <g fill="currentColor">
              <polygon points="1440 100 0 15 0 0 1440 0 1440 100" />
            </g>
          </svg>
        </div>
      </div>

      <div className="container pt-10 pt-lg-10 pt-md-13 pb-8 pb-md-10 text-center text-lg-start">
        <div className="row gx-0 gy-10">
          <div className="col-md-10 offset-md-1 offset-lg-0 col-lg-6 col-xl-5 position-relative">
            <img
              src="/img/svg/doodle2.svg"
              className="h-15 position-absolute d-none d-lg-block"
              style={{ bottom: "36%", right: "-25%" }}
              alt=""
            />

            <img
              data-delay="1800"
              src="/img/svg/doodle6.svg"
              className="h-14 position-absolute d-none d-lg-block"
              style={{ top: "-20%", left: "-25%" }}
              alt=""
            />

            <h2 className="display-3 mb-4">
              Manage all your bills, accounts & budgets in <span className="text-gradient gradient-7">one place.</span>
            </h2>

            <p className="lead fs-24 lh-sm mb-7">
              Sandbox is available to download from both App Store and Google Play Store.
            </p>

            <div className="d-flex justify-content-center justify-content-lg-start">
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

          <div className="col-lg-6 ms-auto mt-lg-n15 mt-xl-n20">
            <figure>
              <img src="/img/photos/devices6.png" srcSet="/img/photos/devices6@2x.png 2x" alt="" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
