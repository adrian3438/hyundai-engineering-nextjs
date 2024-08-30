export default function Hero31() {
  return (
    <section className="wrapper">
      <div className="container pt-11 pt-md-13 pb-19 pb-md-17 text-center">
        <div className="row">
          <div
            data-delay="500"
            data-cues="slideInDown"
            data-group="page-title"
            className="col-lg-9 col-xl-8 col-xxl-7 mx-auto">
            <h1 className="display-1 ls-sm fs-64 mb-4 px-md-8 px-lg-0">
              We bring rapid solutions for your{" "}
              <span className="underline-3 style-1 primary">
                <em>business</em>
              </span>
            </h1>

            <p className="lead fs-24 lh-sm mb-7">
              We are creative company that values quality and focuses on establishing long-term relationships with
              customers.
            </p>

            <div>
              <a className="btn btn-lg btn-primary rounded mb-10 mb-xxl-5">See Projects</a>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-10 col-xl-9 mx-auto mt-11 mb-n21">
            <figure>
              <img
                className="img-fluid"
                src="/img/illustrations/i28.png"
                srcSet="/img/illustrations/i28@2x.png 2x"
                alt=""
              />
            </figure>
          </div>
        </div>
      </div>

      <div className="overflow-hidden">
        <div className="divider text-soft-primary mx-n2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 70">
            <path fill="currentColor" d="M1440,70H0V45.16a5762.49,5762.49,0,0,1,1440,0Z" />
          </svg>
        </div>
      </div>
    </section>
  );
}
