import Link from "next/link";

export default function Hero28() {
  return (
    <section className="wrapper bg-gradient-blend">
      <div className="container pt-16 pt-md-18 pb-12 pb-md-18 pb-lg-20">
        <div className="row">
          <div className="col-lg-3 mx-auto">
            <div className="img-mask mask-2">
              <img src="/img/photos/about28.jpg" srcSet="/img/photos/about28@2x.jpg 2x" alt="" />
            </div>
          </div>
        </div>

        <div className="row mt-10">
          <div className="col-md-10 col-lg-9 col-xxl-8 mx-auto text-center">
            <h2 className="fs-17 text-uppercase text-muted mb-3">Hello! I'm Julia</h2>
            <h3 className="display-1 mb-5 px-xl-12">
              I’m a corporate <em>brand designer</em> based in New York City.
            </h3>
            <p className="lead fs-22">
              I’m very passionate about the work that I do, and if you are curious you can find my works on{" "}
              <Link href="#" className="hover" style={{ color: "var(--bs-dribbble)" }}>
                Dribbble
              </Link>
              , my portfolio on{" "}
              <a href="#" className="hover" style={{ color: "var(--bs-behance)" }}>
                Behance
              </a>
              , and my shots on{" "}
              <a href="#" className="hover" style={{ color: "var(--bs-instagram)" }}>
                Instagram
              </a>
              .
            </p>
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
