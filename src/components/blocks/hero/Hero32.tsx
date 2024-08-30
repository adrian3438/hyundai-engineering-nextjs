import NextLink from "components/reuseable/links/NextLink";

export default function Hero32() {
  return (
    <section className="wrapper gradient-8 bg-lines">
      <div className="container pt-17 pt-md-19 pb-21 pb-lg-23 text-center">
        <div className="row">
          <div
            data-delay="500"
            data-cues="zoomIn"
            data-interval="-200"
            data-group="page-title"
            className="col-lg-10 col-xl-9 col-xxl-8 mx-auto">
            <h2 className="h6 text-uppercase ls-xl text-white mb-5">Hello! We are Sandbox</h2>

            <h1 className="display-1 fs-68 lh-xxs mb-8 text-white">
              We have considered our solutions to{" "}
              <span className="underline-2 underline-gradient-6">
                <em>assist</em>
              </span>{" "}
              every stage of your growth.
            </h1>

            <div
              data-delay="900"
              data-cues="zoomIn"
              data-group="page-title-buttons"
              className="d-flex justify-content-center mb-4">
              <span>
                <NextLink title="Explore Now" href="#" className="btn btn-lg btn-white" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
