export default function Hero33() {
  return (
    <section className="section-frame mx-xxl-11 overflow-hidden">
      <div
        className="wrapper image-wrapper bg-image bg-cover bg-overlay bg-overlay-light-500"
        style={{ backgroundImage: "url(/img/photos/bg23.png)" }}>
        <div className="container py-16 py-md-18 text-center position-relative">
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
              <h1 className="display-1 fs-70 px-md-10 px-lg-0 px-xl-8 mb-5">
                👋 Hello! I'm <img className="d-inline w-12 mx-1" src="/img/avatars/avatar.png" alt="" /> Camille, a
                product designer.
              </h1>

              <p className="lead fs-24 px-md-10 px-lg-0 mx-lg-n10 mx-xl-0 mb-8">
                I’m very passionate about the work that I do, and if you are curious you can find my works on{" "}
                <a href="#" className="hover" style={{ color: "var(--bs-dribbble)" }}>
                  Dribbble
                </a>
                , my portfolio on{" "}
                <a href="#" className="hover" style={{ color: "var(--bs-behance)" }}>
                  Behance
                </a>
                .
              </p>

              <a href="#" className="btn btn-lg btn-primary btn-icon btn-icon-end">
                See My Works <i className="uil uil-arrow-up-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
