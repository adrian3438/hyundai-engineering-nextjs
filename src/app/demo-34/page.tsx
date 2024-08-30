"use client";

import { Fragment } from "react";
import Link from "next/link";
// GLOBAL CUSTOM COMPONENTS
import Navbar from "components/blocks/navbar/navbar-1";
import { Hero34 } from "components/blocks/hero";
import { Facts21 } from "components/blocks/facts";
import { Footer8 } from "components/blocks/footer";
import CountUp from "components/reuseable/CountUp";
import NextLink from "components/reuseable/links/NextLink";
// GLOBAL CUSTOM HOOKS
import useIsotope from "hooks/useIsotope";
import useTooltip from "hooks/useTooltip";
// CUSTOM DATA
import { demos, filterList, innerPages } from "data/demo-34";

export default function Demo34() {
  // used for image tooltip
  useTooltip();

  // used for demo filtering and masionry layout
  const { filterKey, handleFilterKeyChange } = useIsotope();

  return (
    <Fragment>
      {/* ========== topbar alert section ========== */}
      <div className="alert bg-primary text-white fade show rounded-0 mb-1 text-center" role="alert">
        <div className="container">
          <div className="alert-inner d-flex justify-content-center align-items-center p-0">
            <p className="mb-0">
              HTML version of Sandbox is released! Grab a copy{" "}
              <a
                href="https://sandbox.elemisthemes.com"
                className="link-white hover d-inline-flex align-items-center"
                target="_blank">
                here <i className="uil uil-arrow-up-right" />
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* ========== header section ========== */}
      <header className="wrapper bg-soft-primary">
        <Navbar
          logoAlt="logo-purple"
          button={
            <a
              href="https://1.envato.market/Ea4VxK"
              className="btn btn-primary rounded-pill"
              target="_blank"
              rel="noreferrer">
              Purchase Now
            </a>
          }
        />
      </header>

      <main className="content-wrapper">
        {/* ========== hero section ========== */}
        <Hero34 />

        {/* ========== 21 demos section ========== */}
        <section className="wrapper bg-light" id="demos">
          <div className="container py-14 py-md-18 pb-md-19">
            <div className="row mb-10">
              <div className="col-md-9 col-lg-7 col-xl-6 col-xxl-5 mx-auto">
                <div className="counter-wrapper">
                  <h3 className="fs-70 mb-3 text-primary text-center counter">
                    <CountUp end={21} />
                  </h3>
                </div>
                <h2 className="display-3 mb-3 text-center mb-0">Functional, impressive and rich demos to start with</h2>
              </div>
            </div>

            <div className="demos-wrapper">
              {demos.map(({ id, images, features, color, link }) => (
                <div className="demo mb-10" key={id}>
                  <div className={`card bg-soft-${color}`}>
                    <div className="card-body px-4 px-md-8 ps-xl-12 py-0 overflow-hidden">
                      <div className="row gx-md-8 gx-xl-12 d-flex align-items-center">
                        <div className="col-lg-7">
                          <div className="row gx-4 gx-md-7">
                            <div className="col-6">
                              <figure className="itooltip itooltip-yellow mt-9" title="Click to see the demo">
                                <a href={link} target="_blank" rel="noreferrer">
                                  <img
                                    alt=""
                                    className="shadow-lg rounded-top"
                                    src={`/img/demos/${images[0]}.jpg`}
                                    srcSet={`/img/demos/${images[0]}@2x.jpg 2x`}
                                  />
                                </a>
                              </figure>
                            </div>

                            <div className="col-6">
                              <figure className="itooltip itooltip-yellow" title="Click to see the demo">
                                <a href={link} target="_blank" rel="noreferrer">
                                  <img
                                    alt=""
                                    className="shadow-lg rounded-bottom"
                                    src={`/img/demos/${images[1]}.jpg`}
                                    srcSet={`/img/demos/${images[1]}@2x.jpg 2x`}
                                  />
                                </a>
                              </figure>
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-5 d-none d-lg-block py-3">
                          <h2 className="post-title fs-30 mb-4">Demo Layout {id}</h2>
                          <ul className={`icon-list bullet-${color} row ms-0 gy-2`}>
                            {features.map((item) => (
                              <li className="col-md-6" key={item}>
                                <i className="uil uil-check" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>

                          <a
                            href={link}
                            target="_blank"
                            rel="noreferrer"
                            className={`btn btn-sm btn-${color} rounded-pill mt-1`}>
                            See Demo
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <NextLink title="See All Demos" href="#" className="btn btn-primary rounded-pill" />
            </div>
          </div>

          <div className="overflow-hidden">
            <div className="divider text-soft-primary mx-n2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100">
                <path
                  fill="currentColor"
                  d="M1260,1.65c-60-5.07-119.82,2.47-179.83,10.13s-120,11.48-180,9.57-120-7.66-180-6.42c-60,1.63-120,11.21-180,16a1129.52,1129.52,0,0,1-180,0c-60-4.78-120-14.36-180-19.14S60,7,30,7H0v93H1440V30.89C1380.07,23.2,1319.93,6.15,1260,1.65Z"
                />
              </svg>
            </div>
          </div>
        </section>

        {/* ========== facts section ========== */}
        <Facts21 />

        {/* ========== feature section ========== */}
        <section className="wrapper bg-light">
          <div className="container pb-11 pb-md-14">
            <div className="row gx-lg-8 gx-xl-0 gy-10 align-items-center mb-14 mb-md-16">
              <div className="col-lg-6 position-relative">
                <div
                  className="shape rounded bg-soft-primary rellax d-block"
                  style={{
                    zIndex: 0,
                    top: "50%",
                    left: "50%",
                    width: "50%",
                    height: "60%",
                    transform: "translate(-50%,-50%)"
                  }}
                />

                <div className="row gx-md-5 gy-5 position-relative">
                  <div className="col-6">
                    <img
                      alt=""
                      src="/img/demos/fe1.jpg"
                      srcSet="/img/demos/fe1@2x.jpg 2x"
                      className="img-fluid rounded shadow-lg mb-5"
                    />
                    <img
                      alt=""
                      src="/img/demos/fe2.jpg"
                      srcSet="/img/demos/fe2@2x.jpg 2x"
                      className="img-fluid rounded shadow-lg d-flex col-10 ms-auto"
                    />
                  </div>

                  <div className="col-6">
                    <img
                      alt=""
                      src="/img/demos/fe3.jpg"
                      srcSet="/img/demos/fe3@2x.jpg 2x"
                      className="img-fluid rounded shadow-lg my-5"
                    />
                    <img
                      alt=""
                      src="/img/demos/fe4.jpg"
                      srcSet="/img/demos/fe4@2x.jpg 2x"
                      className="img-fluid rounded shadow-lg d-flex col-10"
                    />
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-xl-5 col-xxl-4 offset-xl-1">
                <div className="d-flex flex-row mb-7">
                  <div>
                    <div className="icon btn btn-circle pe-none btn-soft-primary mt-1 me-4">
                      <i className="uil uil-images" />
                    </div>
                  </div>

                  <div>
                    <h4 className="mb-1">Modern Portfolio Layouts</h4>
                    <p className="mb-0">
                      Build and manage an eye-catching and impressive portfolio fast and without effort.
                    </p>
                  </div>
                </div>

                <div className="d-flex flex-row mb-7">
                  <div>
                    <div className="icon btn btn-circle pe-none btn-soft-primary mt-1 me-4">
                      <i className="uil uil-calendar-alt" />
                    </div>
                  </div>

                  <div>
                    <h4 className="mb-1">Useful Blog Layouts</h4>
                    <p className="mb-0">
                      Create an attractive and stunning journal to tell the world your wonderful stories.
                    </p>
                  </div>
                </div>

                <div className="d-flex flex-row">
                  <div>
                    <div className="icon btn btn-circle pe-none btn-soft-primary mt-1 me-4">
                      <i className="uil uil-star" />
                    </div>
                  </div>

                  <div>
                    <h4 className="mb-1">Cool Features & Elements</h4>
                    <p className="mb-0">
                      Sandbox includes amazing features and elements to create rich and attractive pages.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row gx-lg-8 gx-xl-0 gy-10 align-items-center mb-16 mb-md-22">
              <div className="col-lg-6 offset-xl-1 position-relative order-lg-2">
                <div
                  className="shape rounded bg-soft-primary rellax d-block"
                  style={{
                    zIndex: 0,
                    top: "50%",
                    left: "50%",
                    width: "50%",
                    height: "60%",
                    transform: "translate(-50%,-50%)"
                  }}
                />

                <div className="row gx-md-5 gy-5 position-relative">
                  <div className="col-5">
                    <img
                      alt=""
                      src="/img/demos/fe5.jpg"
                      srcSet="/img/demos/fe5@2x.jpg 2x"
                      className="img-fluid rounded shadow-lg my-5 d-flex ms-auto"
                    />
                    <img
                      alt=""
                      src="/img/demos/fe6.jpg"
                      srcSet="/img/demos/fe6@2x.jpg 2x"
                      className="img-fluid rounded shadow-lg d-flex col-10 ms-auto"
                    />
                  </div>

                  <div className="col-7">
                    <img
                      alt=""
                      src="/img/demos/fe7.jpg"
                      srcSet="/img/demos/fe7@2x.jpg 2x"
                      className="img-fluid rounded shadow-lg mb-5"
                    />
                    <img
                      alt=""
                      src="/img/demos/fe8.jpg"
                      srcSet="/img/demos/fe8@2x.jpg 2x"
                      className="img-fluid rounded shadow-lg d-flex col-11"
                    />
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-xl-5 col-xxl-4 offset-xxl-1">
                <div className="d-flex flex-row mb-7">
                  <div>
                    <div className="icon btn btn-circle pe-none btn-soft-primary mt-1 me-4">
                      <i className="uil uil-web-grid-alt" />
                    </div>
                  </div>

                  <div>
                    <h4 className="mb-1">13 Headers & 5 Footers</h4>
                    <p className="mb-0">
                      Choose from various gorgeous header and footer styles to serve you best for your needs.
                    </p>
                  </div>
                </div>

                <div className="d-flex flex-row mb-7">
                  <div>
                    <div className="icon btn btn-circle pe-none btn-soft-primary mt-1 me-4">
                      <i className="uil uil-palette" />
                    </div>
                  </div>

                  <div>
                    <h4 className="mb-1">Color & Font Options</h4>
                    <p className="mb-0">
                      You can either use the included color and fonts or easily add your own choices.
                    </p>
                  </div>
                </div>

                <div className="d-flex flex-row">
                  <div>
                    <div className="icon btn btn-circle pe-none btn-soft-primary mt-1 me-4">
                      <i className="uil uil-tablet" />
                    </div>
                  </div>
                  <div>
                    <h4 className="mb-1">Fully Responsive Layout</h4>
                    <p className="mb-0">
                      Sandbox adapts to different screen sizes therefore it is compatible with any device.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-hidden">
            <div className="divider text-soft-primary mx-n2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100">
                <path
                  fill="currentColor"
                  d="M1260,1.65c-60-5.07-119.82,2.47-179.83,10.13s-120,11.48-180,9.57-120-7.66-180-6.42c-60,1.63-120,11.21-180,16a1129.52,1129.52,0,0,1-180,0c-60-4.78-120-14.36-180-19.14S60,7,30,7H0v93H1440V30.89C1380.07,23.2,1319.93,6.15,1260,1.65Z"
                />
              </svg>
            </div>
          </div>
        </section>

        {/* ========== used tools section ========== */}
        <section className="wrapper bg-gradient-primary">
          <div className="container pb-14 pb-md-16">
            <div className="row gx-0 mb-14 mb-md-16">
              <div className="col-9 col-sm-10 col-lg-9 mx-auto mt-n15 mt-md-n23">
                <img
                  alt=""
                  src="/img/demos/de1.jpg"
                  srcSet="/img/demos/de1@2x.jpg 2x"
                  className="img-fluid mx-auto rounded shadow-lg"
                />
                <img
                  alt=""
                  src="/img/demos/de2.jpg"
                  srcSet="/img/demos/de2@2x.jpg 2x"
                  className="position-absolute rounded shadow-lg"
                  style={{ top: "25%", right: "-12%", maxWidth: "30%", height: "auto" }}
                />
                <img
                  alt=""
                  src="/img/demos/de3.jpg"
                  srcSet="/img/demos/de3@2x.jpg 2x"
                  className="position-absolute rounded shadow-lg"
                  style={{ top: "15%", left: "-15%", maxWidth: "30%", height: "auto" }}
                />
                <img
                  alt=""
                  src="/img/demos/de4.jpg"
                  srcSet="/img/demos/de4@2x.jpg 2x"
                  className="position-absolute rounded shadow-lg"
                  style={{ bottom: "15%", left: "-13%", maxWidth: "30%", height: "auto" }}
                />
              </div>
            </div>

            <div className="row row-cols-2 row-cols-md-4 row-cols-lg-5 gx-md-8 gy-10 text-center justify-content-center">
              <div className="col">
                <img className="mb-4" src="/img/svg/next.js-circle.svg" alt="" />
                <h4>
                  Built with Next.js <br /> & React
                </h4>
              </div>

              <div className="col">
                <img className="mb-4" src="/img/demos/fi1.png" srcSet="/img/demos/fi1@2x.png 2x" alt="" />
                <h4>
                  Bootstrap 5 <br /> & Sass
                </h4>
              </div>

              <div className="col">
                <img className="mb-4" src="/img/svg/typescript.svg" alt="" />
                <h4>
                  Typescript <br /> Clean & Organized
                </h4>
              </div>

              <div className="col">
                <img className="mb-4" src="/img/demos/fi11.png" srcSet="/img/demos/fi11@2x.png 2x" alt="" />
                <h4>
                  Server side <br /> Rendered
                </h4>
              </div>

              <div className="col">
                <img className="mb-4" src="/img/demos/fi2.png" srcSet="/img/demos/fi2@2x.png 2x" alt="" />
                <h4>
                  SEO-friendly <br /> Coding
                </h4>
              </div>

              <div className="col">
                <img className="mb-4" src="/img/demos/fi4.png" srcSet="/img/demos/fi4@2x.png 2x" alt="" />
                <h4>
                  Retina-ready <br /> Graphics
                </h4>
              </div>

              <div className="col">
                <img className="mb-4" src="/img/demos/fi5.png" srcSet="/img/demos/fi5@2x.png 2x" alt="" />
                <h4>
                  One-page <br /> Layout Option
                </h4>
              </div>

              <div className="col">
                <img className="mb-4" src="/img/demos/fi6.png" srcSet="/img/demos/fi6@2x.png 2x" alt="" />
                <h4>
                  Isotope <br /> Filterable Gallery
                </h4>
              </div>

              <div className="col">
                <img className="mb-4" src="/img/demos/fi8.png" srcSet="/img/demos/fi8@2x.png 2x" alt="" />
                <h4>
                  Contact Form <br /> w/o Page Refresh
                </h4>
              </div>

              <div className="col">
                <img className="mb-4" src="/img/demos/fi10.png" srcSet="/img/demos/fi10@2x.png 2x" alt="" />
                <h4>
                  Top-Notch Support <br /> & Free Updates
                </h4>
              </div>
            </div>
          </div>
        </section>

        {/* ========== inner page section ========== */}
        <section className="wrapper bg-gradient-reverse-primary">
          <div className="container pb-10 pb-md-13">
            <div className="row mb-8 text-center">
              <div className="col-lg-8 col-xl-7 mx-auto">
                <h2 className="fs-15 ls-xl text-uppercase text-muted">Inner Pages</h2>
                <h2 className="display-3 mt-3 mb-3 mb-0">
                  Handcrafted and carefully put together pages to choose from.
                </h2>
              </div>
            </div>

            <div className="grid grid-view projects-masonry">
              <div className="isotope-filter filter mb-10 text-start text-md-center">
                <p>Filter:</p>
                <ul>
                  {filterList.map(({ id, title, value }) => (
                    <li key={id}>
                      <a
                        onClick={handleFilterKeyChange(value)}
                        className={filterKey === value ? "filter-item active" : "filter-item"}>
                        {title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div data-cue="fadeIn">
                <div className="row gx-md-8 gx-xl-9 gy-8 gy-xl-9 isotope">
                  {innerPages.map(({ category, id, image, title }) => (
                    <div className={`project item col-md-6 col-xl-4 ${category}`} key={id}>
                      <figure className="itooltip itooltip-primary rounded shadow-lg" title={title}>
                        <Link href="#">
                          <img src={`/img/demos/${image}.jpg`} srcSet={`/img/demos/${image}@2x.jpg 2x`} alt="" />
                        </Link>
                      </figure>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mb-15" />
          </div>

          <div className="overflow-hidden">
            <div className="divider text-light mx-n2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100">
                <path
                  fill="currentColor"
                  d="M1260,1.65c-60-5.07-119.82,2.47-179.83,10.13s-120,11.48-180,9.57-120-7.66-180-6.42c-60,1.63-120,11.21-180,16a1129.52,1129.52,0,0,1-180,0c-60-4.78-120-14.36-180-19.14S60,7,30,7H0v93H1440V30.89C1380.07,23.2,1319.93,6.15,1260,1.65Z"
                />
              </svg>
            </div>
          </div>
        </section>

        {/* ========== responsive section ========== */}
        <section className="wrapper bg-light">
          <div className="container pt-lg-20 pb-18 pb-xxl-20 position-relative">
            <img
              alt=""
              data-cue="fadeIn"
              src="/img/demos/devices.png"
              srcSet="/img/demos/devices@2x.png 2x"
              className="position-lg-absolute col-12 col-lg-12 mt-xxl-n3 mb-3 mb-md-10 mb-lg-0"
              style={{ top: 0, left: "-23%" }}
            />

            <div className="row gx-lg-8 gx-xl-12 mt-lg-n16 mt-xl-n12 mt-xxl-0 align-items-xxl-center">
              <div className="col-md-10 offset-md-1 col-lg-6 offset-lg-6 text-center text-lg-start">
                <div className="ps-xl-1 ps-xxl-5 pe-xxl-10">
                  <h2 className="fs-15 ls-xl text-uppercase text-muted mb-3">Fully Responsive</h2>
                  <h3 className="display-3 mb-5">Responsive images & texts no matter the screen size.</h3>
                  <p className="lead mb-8">
                    Sandbox is responsive so the layout will adapt to different screen sizes that will make your website
                    compatible with any device such as smart phones, tablets and computers.
                  </p>

                  <img
                    src="/img/demos/qrcode.jpg"
                    srcSet="/img/demos/qrcode@2x.jpg 2x"
                    className="shadow-lg rounded"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== call to action section ========== */}
        <section className="wrapper bg-gradient-reverse-primary">
          <div className="container pt-xl-10 text-center">
            <div className="row">
              <div className="col-md-10 col-lg-9 col-xl-8 col-xxl-7 mx-auto">
                <img src="/img/demos/icon.png" srcSet="/img/demos/icon@2x.png 2x" alt="" />
                <h2 className="display-3 mt-3 mb-3 px-lg-8">
                  Think unique and be creative. Make a difference with Sandbox.
                </h2>

                <p className="lead fs-lg mb-6">
                  Everything you need to create your next unique and professional website, including impressive and
                  ready-made blocks and pages.
                </p>
                <a
                  href="https://1.envato.market/Ea4VxK"
                  target="_blank"
                  className="btn btn-lg btn-primary rounded-pill mb-10"
                  rel="noreferrer">
                  Buy Sandbox
                </a>
              </div>
            </div>

            <img className="img-fluid" src="/img/demos/f1.png" srcSet="/img/demos/f1@2x.png 2x" alt="" />
          </div>
        </section>
      </main>

      {/* ========== footer section ========== */}
      <Footer8 />
    </Fragment>
  );
}
