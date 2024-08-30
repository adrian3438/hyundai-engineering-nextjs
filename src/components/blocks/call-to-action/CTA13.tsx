import Link from "next/link";

export default function CTA13() {
  return (
    <section className="section-frame mx-xxl-11 overflow-hidden">
      <div
        className="wrapper image-wrapper bg-image bg-cover bg-overlay bg-overlay-light-500"
        style={{ backgroundImage: "url(/img/photos/bg23.png)" }}>
        <div className="container py-16 py-md-18 text-center">
          <div className="position-absolute shape yellow d-none d-lg-block w-5" style={{ top: "18%", left: "5%" }}>
            <img src="/img/svg/pie.svg" className="svg-inject icon-svg w-100 h-100" alt="" />
          </div>

          <div className="position-absolute shape leaf d-none d-lg-block w-10" style={{ bottom: "30%", left: "2%" }}>
            <img src="/img/svg/scribble.svg" className="svg-inject icon-svg w-100 h-100" alt="" />
          </div>

          <div
            className="position-absolute shape fuchsia d-none d-lg-block w-6"
            style={{ top: "20%", right: "2%", transform: "rotate(70deg)" }}>
            <img src="/img/svg/tri.svg" className="svg-inject icon-svg w-100 h-100" alt="" />
          </div>

          <div className="position-absolute shape grape d-none d-lg-block w-6" style={{ bottom: "28%", right: "5%" }}>
            <img src="/img/svg/circle.svg" className="svg-inject icon-svg w-100 h-100" alt="" />
          </div>

          <div className="row">
            <div className="col-lg-9 col-xxl-8 mx-auto">
              <h1 className="display-1 fs-70 mx-lg-n10 mx-xl-0 mb-5">
                Got a 👾 project in mind? Let's work together. ✌️
              </h1>

              <p className="lead fs-24 px-md-12 px-lg-0 mx-lg-n10 mx-xl-0 mb-8">
                I bring rapid solutions to make the life of my clients easier. Have any questions? Reach out to me and I
                will get back to you shortly.
              </p>

              <Link href="#" className="btn btn-lg btn-primary btn-icon btn-icon-end">
                Contact Me <i className="uil uil-arrow-up-right" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
