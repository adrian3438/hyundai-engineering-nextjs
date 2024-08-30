"use client";

import { Fragment } from "react";

// GLOBAL CUSTOM HOOKS
import useLightBox from "hooks/useLightBox";
import useReplaceMe from "hooks/useReplaceMe";
// GLOBAL CUSTOM COMPONENTS
import Navbar from "components/blocks/navbar/navbar-1";
import CountUp from "components/reuseable/CountUp";
import Carousel from "components/reuseable/Carousel";
import NextLink from "components/reuseable/links/NextLink";
// CUSTOM ICON COMPONENT
import Safe from "icons/solid/Safe";
import Layers from "icons/solid/Layers";
import Share from "icons/solid-mono/Share";
import Puzzle from "icons/solid-mono/Puzzle";
import PenTool from "icons/solid-duo/PenTool";
import Devices from "icons/solid-mono/Devices";
import GlobeTwo from "icons/solid-mono/GlobeTwo";

export default function Home() {
  // USED FOR HERO AREA TEXT CHANGE FREQUENTLY
  useReplaceMe();

  // USED FOR SHOW POPUP WITH IMAGE
  useLightBox();

  return (
    <Fragment>
      {/* ========== header section ========== */}
      <header className="position-absolute w-100">
        <Navbar
          navClassName="navbar navbar-expand-lg center-nav transparent navbar-light"
          button={
            <a href="https://cutt.ly/P4rW6e4" className="btn btn-primary rounded-xl" target="_blank">
              Purchase Now
            </a>
          }
        />
      </header>

      <main className="content-wrapper">
        {/* ========== hero section ========== */}
        <section className="wrapper overflow-hidden">
          <div className="container pt-19 pt-md-21 pb-16 pb-md-18 text-center position-relative">
            <div
              data-cue="fadeIn"
              className="position-absolute"
              style={{ top: "-12%", left: "50%", transform: "translateX(-50%)" }}>
              <img src="/img/photos/blurry.png" alt="" />
            </div>

            <div className="row position-relative">
              <div className="col-lg-8 col-xxl-7 mx-auto position-relative">
                <div
                  data-cue="fadeIn"
                  data-delay="1500"
                  className="position-absolute shape grape w-5 d-none d-lg-block"
                  style={{ top: "-5%", left: "-15%" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 219.5 219.5"
                    className="svg-inject icon-svg w-100 h-100">
                    <path
                      className="svg-fill"
                      d="M219.5 219.5H0c0-58.19 23.14-114.06 64.29-155.21A219.561 219.561 0 01219.5 0v219.5z"
                    />
                  </svg>
                </div>

                <div
                  data-cue="fadeIn"
                  data-delay="1500"
                  className="position-absolute shape violet w-10 d-none d-lg-block"
                  style={{ bottom: "30%", left: "-20%" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 457.71 446.45"
                    className="svg-inject icon-svg w-100 h-100">
                    <path
                      className="svg-fill"
                      d="M205.62 442.54c-.51-.41-.99-.84-1.46-1.31-10.4-10.39-3.61-27.12 11.63-52.5 11.72-19.51 28.48-43.74 46.22-69.39 17.53-25.34 35.66-51.54 49.01-73.47 14.73-24.19 18.57-35.01 19.51-39.48-3.86-.28-13.15.3-33.78 6.52-19.71 5.94-43.09 14.92-65.7 23.6-63.8 24.49-85.35 31.41-96.51 19.5-3.21-3.43-7.62-11.04-1.12-23.54 2.49-4.79 6.64-10.51 12.68-17.5 10.4-12.03 25.04-26.34 40.55-41.49 14.02-13.7 28.53-27.87 39.53-40.11 9.93-11.04 14.15-17.43 15.94-20.82-3.43-.75-10.24-1.51-23.25-.92-14.99.68-33.44 2.89-51.28 5.02-46.92 5.61-74.09 8.33-86.81-.99-4.78-3.5-7.67-8.42-8.41-14.24-1.97-15.58 12.45-33.15 29.14-53.5 5.31-6.47 13.31-16.22 17.36-22.68-4.51-.38-12.43-.4-25.97 1.1-16.54 1.82-35.62 5.22-50.95 7.96-12.62 2.25-22.6 4.03-28.48 4.49C6.6 39.3.58 34.17.04 27.28c-.54-6.88 4.6-12.9 11.48-13.44 4.66-.37 14.58-2.13 26.06-4.18C54.56 6.63 75.7 2.86 94 1.07c26.41-2.6 40.16-.54 47.48 7.13 7.01 7.34 6.45 17.66-1.68 30.66-4.72 7.55-11.63 15.98-18.95 24.9-6.18 7.53-12.57 15.31-17.24 22.19-3.35 4.92-4.95 8.13-5.71 10.07 3 .54 9.09 1.08 20.87.43 13.21-.73 29.07-2.63 45.86-4.64 59.99-7.17 94.33-10.22 102.49 10.62 7.4 18.93-16.51 43.51-62.99 88.92-12.69 12.4-24.68 24.11-34.04 34.28-3.17 3.45-5.68 6.34-7.67 8.75 15.88-4.42 41.18-14.13 59.67-21.22 62.4-23.96 101.69-37.87 121.09-29.14 5.38 2.42 9.26 6.47 11.23 11.72 7.48 19.95-16.15 57.31-71.83 137.82-15.49 22.39-30.12 43.55-41.18 61.25-7.13 11.4-11.3 19.11-13.75 24.25 8.97-3.3 25.58-11 55.73-28.8 32.68-19.29 70.61-44.04 101.09-63.94 24.62-16.07 44.07-28.76 54.65-34.68 6.03-3.37 13.64-1.22 17.01 4.81 3.37 6.03 1.22 13.64-4.81 17.01-9.83 5.5-29.92 18.61-53.18 33.79-33.46 21.84-75.1 49.01-110.05 69.21-49.35 28.51-70.85 35.44-82.46 26.07z"
                    />
                  </svg>
                </div>

                <div
                  data-cue="fadeIn"
                  data-delay="1500"
                  className="position-absolute shape fuchsia w-6 d-none d-lg-block"
                  style={{ top: "0%", right: "-25%", transform: "rotate(70deg)" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 411.42 329.24"
                    className="svg-inject icon-svg w-100 h-100">
                    <g data-name="Layer 2">
                      <path
                        className="svg-fill"
                        d="M164.34 21.92L8.72 251.15c-22.54 33.2 1.24 78.09 41.37 78.09h311.24c40.13 0 63.91-44.89 41.37-78.09L247.08 21.92a50 50 0 00-82.74 0z"
                        data-name="Layer 1"
                      />
                    </g>
                  </svg>
                </div>

                <div
                  data-cue="fadeIn"
                  data-delay="1500"
                  className="position-absolute shape yellow w-6 d-none d-lg-block"
                  style={{ bottom: "25%", right: "-17%" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 500 500"
                    className="svg-inject icon-svg w-100 h-100">
                    <g data-name="Layer 2">
                      <path
                        className="svg-fill"
                        d="M250 0C111.93 0 0 111.93 0 250s111.93 250 250 250 250-111.93 250-250S388.07 0 250 0zm0 425a175 175 0 11175-175 175 175 0 01-175 175z"
                        data-name="Layer 1"
                      />
                    </g>
                  </svg>
                </div>

                <div data-cues="slideInDown" data-group="page-title">
                  <h1 className="display-1 fs-64 mb-5 mx-md-10 mx-lg-0">
                    Create a powerful but effortless website for <br />
                    <span className="rotator-fade text-primary">
                      your business.,your portfolio.,your startup.,digital marketing.
                    </span>
                  </h1>

                  <p className="lead fs-24 mb-8">
                    You can create your website in minutes with the help of countless amazing features of Sandbox.
                  </p>
                </div>

                <div className="d-flex justify-content-center" data-cues="slideInDown" data-delay="600">
                  <span>
                    <a href="#demos" className="btn btn-lg btn-primary btn-icon btn-icon-end rounded-xl mx-1 scroll">
                      See Demo Pages <i className="uil uil-arrow-down-right" />
                    </a>
                  </span>

                  <span>
                    <a
                      href="https://1.envato.market/Ea4VxK"
                      className="btn btn-lg btn-fuchsia btn-icon btn-icon-end rounded-xl mx-1"
                      target="_blank">
                      Next.js Version <i className="uil uil-arrow-up-right" />
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="swiper-container swiper-auto swiper-auto-xs mb-8">
            <Carousel
              loop
              updateOnWindowResize
              speed={7000}
              spaceBetween={40}
              navigation={false}
              pagination={false}
              slidesPerView="auto"
              autoplay={{ delay: 1 }}
              wrapperClass="swiper-wrapper ticker"
              className="overflow-visible pe-none">
              {[8, 9, 10, 11, 12, 13, 14].map((num) => (
                <figure className="rounded-xl shadow-xl" key={num}>
                  <img src={`/img/photos/ma${num}.jpg`} srcSet={`/img/photos/ma${num}@2x.jpg 2x`} alt="" />
                </figure>
              ))}
            </Carousel>
          </div>

          <div className="swiper-container swiper-auto swiper-auto-xs mb-10 mb-md-12">
            <Carousel
              loop
              updateOnWindowResize
              speed={7000}
              spaceBetween={40}
              navigation={false}
              pagination={false}
              slidesPerView="auto"
              autoplay={{ delay: 1 }}
              wrapperClass="swiper-wrapper ticker"
              className="overflow-visible pe-none"
              dir="rtl">
              {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                <figure className="rounded-xl shadow-xl" key={num}>
                  <img src={`/img/photos/ma${num}.jpg`} srcSet={`/img/photos/ma${num}@2x.jpg 2x`} alt="" />
                </figure>
              ))}
            </Carousel>
          </div>
        </section>

        <section className="wrapper bg-soft-primary" id="demos">
          <div className="container pt-16 pt-mb-18">
            <div className="row mb-10">
              <div className="col-md-9 col-lg-8 col-xl-7 col-xxl-6 mx-auto">
                <div className="counter-wrapper">
                  <h3 className="fs-70 mb-3 text-primary text-center counter">34</h3>
                </div>

                <h2 className="display-2 mb-3 text-center mb-0 px-xxl-8">
                  Functional, impressive and rich demos to start with
                </h2>
              </div>
            </div>

            {/* ========== new demos section ========== */}
            <div className="demos-wrapper text-center mb-16 mb-md-18">
              <h2 className="fs-17 text-uppercase text-muted mb-6">New Demos</h2>

              <div className="row mb-10 gx-md-8 gy-12">
                {[18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34].map((item) => (
                  <div className="col-md-6 col-lg-4" key={item}>
                    <figure className="lift rounded-xl mb-6" title="Click to see the demo">
                      <a href={`/demo-${item}`} target="_blank">
                        <img
                          alt=""
                          className="shadow-xl"
                          src={`/img/demos/d${item}.jpg`}
                          srcSet={`/img/demos/d${item}@2x.jpg 2x`}
                        />
                      </a>
                    </figure>

                    <h2 className="fs-22 mb-0">
                      <NextLink title={`Layout ${item}`} href={`/demo-${item}`} className="link-dark" />
                    </h2>
                  </div>
                ))}

                <div className="col-md-6 col-lg-4 d-none d-md-flex align-items-center justify-content-center flex-column">
                  <Layers />

                  <h3 className="fs-17 text-uppercase text-muted mb-4">Scroll for more</h3>

                  <a href="#prev-demos" className="btn btn-lg btn-primary btn-icon btn-icon-end rounded-xl mx-1 scroll">
                    Previous Demos <i className="uil uil-arrow-down-right" />
                  </a>
                </div>
              </div>

              <h2 className="fs-17 text-uppercase text-muted pt-16 mt-n8 mb-6" id="prev-demos">
                Previous Demos
              </h2>

              <div className="row mb-10 gx-md-8 gy-12">
                {Array.from({ length: 17 }).map((_, i) => {
                  const num = i + 1;

                  return (
                    <div className="col-md-6 col-lg-4" key={num}>
                      <figure className="lift rounded-xl mb-6" title="Click to see the demo">
                        <a href={`/demo-${num}`} target="_blank">
                          <img
                            alt=""
                            className="shadow-xl"
                            src={`/img/demos/d${num}.jpg`}
                            srcSet={`/img/demos/d${num}@2x.jpg 2x`}
                          />
                        </a>
                      </figure>

                      <h2 className="fs-22 mb-0">
                        <NextLink title={`Layout ${num}`} href={`/demo-${num}`} className="link-dark" />
                      </h2>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="row mb-8 text-center">
              <div className="col-md-11 col-lg-10 col-xl-8 col-xxl-7 mx-auto">
                <h2 className="display-2 mt-3 mb-3 mb-0 px-lg-10 px-xl-0">
                  Save your time and money by choosing Sandbox for your website.
                </h2>
              </div>
            </div>

            {/* ========== frevious demos section ========== */}
            <div className="row mb-12 mb-md-14">
              <div className="col-lg-10 col-xl-8 col-xxl-7 mx-auto">
                <div className="row align-items-center counter-wrapper gy-6 text-center">
                  <div className="col-md-4">
                    <h3 className="counter fs-50 text-primary mb-1">
                      <CountUp end={250} suffix="+" />
                    </h3>
                    <p className="fs-18 mb-0">UI elements</p>
                  </div>

                  <div className="col-md-4">
                    <h3 className="counter fs-50 text-primary mb-1">
                      <CountUp end={130} suffix="+" />
                    </h3>
                    <p className="fs-18 mb-0">Pre-made blocks</p>
                  </div>

                  <div className="col-md-4">
                    <h3 className="counter fs-50 text-primary mb-1">
                      <CountUp end={100} suffix="+" />
                    </h3>
                    <p className="fs-18 mb-0">Neatly coded pages</p>
                  </div>
                </div>
              </div>
            </div>

            {/* ========== feature 1 section ========== */}
            <div className="row gx-lg-0 gy-10 align-items-center mb-16 mb-md-18">
              <div className="col-lg-7 position-relative">
                <div
                  className="position-absolute"
                  style={{
                    zIndex: 0,
                    top: "50%",
                    left: "50%",
                    width: "140%",
                    height: "auto",
                    transform: "translate(-50%,-50%)"
                  }}>
                  <img className="w-100" src="/img/photos/blurry.png" alt="" />
                </div>

                <figure className="position-relative" style={{ zIndex: 2 }}>
                  <img src="/img/photos/mi1.png" srcSet="/img/photos/mi1@2x.png 2x" alt="" />
                </figure>
              </div>

              <div className="col-lg-4 ms-auto">
                <div className="d-flex flex-row mb-6">
                  <div>
                    <div className="svg-bg bg-white rounded-xl shadow-xl me-5">
                      <Puzzle className="solid-duo text-grape-fuchsia" />
                    </div>
                  </div>

                  <div>
                    <h4 className="mb-1">Color and Font Options</h4>
                    <p className="mb-0">Easily customize colors and fonts, or choose from provided options.</p>
                  </div>
                </div>

                <div className="d-flex flex-row mb-6">
                  <div>
                    <div className="svg-bg bg-white rounded-xl shadow-xl me-5">
                      <PenTool className="solid-duo text-grape-fuchsia" />
                    </div>
                  </div>

                  <div>
                    <h4 className="mb-1">Cool Features & Elements</h4>
                    <p className="mb-0">Equipped with stunning features and elements for designing appealing pages.</p>
                  </div>
                </div>

                <div className="d-flex flex-row">
                  <div>
                    <div className="svg-bg bg-white rounded-xl shadow-xl me-5">
                      <Share className="solid-duo text-grape-fuchsia" />
                    </div>
                  </div>

                  <div>
                    <h4 className="mb-1">Modern Portfolio Layouts</h4>
                    <p className="mb-0">
                      Effortlessly create and maintain a visually stunning and impactful portfolio.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ========== feature 2 section ========== */}
            <div className="row gx-lg-0 gy-10 align-items-center">
              <div className="col-lg-7 position-relative order-lg-2">
                <div
                  className="position-absolute"
                  style={{
                    zIndex: 0,
                    top: "50%",
                    left: "50%",
                    width: "140%",
                    height: "auto",
                    transform: "translate(-50%,-50%)"
                  }}>
                  <img className="w-100" src="/img/photos/blurry.png" alt="" />
                </div>

                <figure className="position-relative" style={{ zIndex: 2 }}>
                  <img src="/img/photos/mi2.png" srcSet="/img/photos/mi2@2x.png 2x" alt="" />
                </figure>
              </div>

              <div className="col-lg-4 me-auto">
                <div className="d-flex flex-row mb-6">
                  <div>
                    <div className="svg-bg bg-white rounded-xl shadow-xl me-5">
                      <Devices className="solid-duo text-grape-fuchsia" />
                    </div>
                  </div>

                  <div>
                    <h4 className="mb-1">Well-Written Code</h4>
                    <p className="mb-0">Pixel-perfect and easily editable code with comprehensive comments.</p>
                  </div>
                </div>

                <div className="d-flex flex-row mb-6">
                  <div>
                    <div className="svg-bg bg-white rounded-xl shadow-xl me-5">
                      <Safe className="solid-duo text-grape-fuchsia" />
                    </div>
                  </div>

                  <div>
                    <h4 className="mb-1">Gorgeous Shop Layouts</h4>
                    <p className="mb-0">
                      Present your products to your visitors in an efficient and visually appealing manner.
                    </p>
                  </div>
                </div>

                <div className="d-flex flex-row">
                  <div>
                    <div className="svg-bg bg-white rounded-xl shadow-xl me-5">
                      <GlobeTwo className="solid-duo text-grape-fuchsia" />
                    </div>
                  </div>

                  <div>
                    <h4 className="mb-1">Fully Responsive Layouts</h4>
                    <p className="mb-0">
                      Adjusts to varying screen sizes, ensuring seamless compatibility across all devices.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row mb-8 text-center mt-17 mt-md-19 mb-9 mb-md-11">
              <div className="col-md-11 col-lg-10 col-xl-8 col-xxl-7 mx-auto">
                <h2 className="display-2 mb-0 px-lg-10 px-xl-0">
                  Build your website using the powerful features of Sandbox
                </h2>
              </div>
            </div>
          </div>

          {/* ========== demos carousel section ========== */}
          <div className="container-fluid px-xl-0 pb-16 pb-md-18">
            <div className="swiper-container swiper-auto">
              <Carousel
                loop
                grabCursor
                spaceBetween={40}
                pagination={false}
                navigation={false}
                slidesPerView="auto"
                className="overflow-visible">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <figure className="rounded-xl shadow-xl" key={item}>
                    <img src={`/img/photos/bp${item}.jpg`} srcSet={`/img/photos/bp${item}@2x.jpg 2x`} alt="" />
                  </figure>
                ))}
              </Carousel>
            </div>
          </div>

          {/* ========== tools & reviews section ========== */}
          <div className="container pb-6 pb-md-8">
            {/* ========== used technology section ========== */}
            <div className="row row-cols-2 row-cols-md-4 row-cols-lg-5 gx-md-8 gy-10 text-center justify-content-center pb-16 pb-md-18">
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

            {/* ========== client reviews section ========== */}
            <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
              <div className="col-lg-7 position-relative">
                <div
                  className="position-absolute"
                  style={{
                    // zIndex: 0,
                    top: "50%",
                    left: "50%",
                    width: "130%",
                    height: "auto",
                    transform: "translate(-50%,-50%)"
                  }}>
                  <img className="w-100" src="/img/photos/blurry.png" alt="" />
                </div>

                <div className="row gx-md-5 gy-5">
                  <div className="col-md-6 col-xl-5 align-self-end">
                    <div className="card shadow-xl rounded-xl">
                      <div className="card-body">
                        <blockquote className="icon mb-0">
                          <p>
                            “Sandbox is really attractive and it saves my time. The support team is really amazing.”
                          </p>
                          <div className="blockquote-details">
                            <div className="info p-0">
                              <h5 className="mb-0">stevenstrange</h5>
                            </div>
                          </div>
                        </blockquote>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 align-self-end">
                    <div className="card shadow-xl rounded-xl">
                      <div className="card-body">
                        <blockquote className="icon mb-0">
                          <p>
                            “This is just next level stuff in terms of quality, docs and features. I don't think I'm
                            going to need or tolerate any other template from now on.”
                          </p>
                          <div className="blockquote-details">
                            <div className="info p-0">
                              <h5 className="mb-0">70656e6973</h5>
                            </div>
                          </div>
                        </blockquote>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 col-xl-5 offset-xl-1">
                    <div className="card shadow-xl rounded-xl">
                      <div className="card-body">
                        <blockquote className="icon mb-0">
                          <p>
                            “I've been a Themeforest user for almost 10 years and I have purchased well over 100 themes
                            during my time. This theme is amongst the best here.”
                          </p>
                          <div className="blockquote-details">
                            <div className="info p-0">
                              <h5 className="mb-0">bmwe92m3</h5>
                            </div>
                          </div>
                        </blockquote>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 align-self-start">
                    <div className="card shadow-xl rounded-xl">
                      <div className="card-body">
                        <blockquote className="icon mb-0">
                          <p>
                            “Simply the best templates that I have bought so far. Super clean code, intuitive
                            documentations, and most important of all the best design.”
                          </p>
                          <div className="blockquote-details">
                            <div className="info p-0">
                              <h5 className="mb-0">oziuji</h5>
                            </div>
                          </div>
                        </blockquote>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <h2 className="display-2 mb-4 mt-lg-n6">Our top priority is ensuring customer satisfaction.</h2>
                <p className="lead fs-22 mb-6">Don't take our word for it. Hear from customers about Sandbox.</p>
                <a
                  href="https://1.envato.market/Rygn0y"
                  className="btn btn-lg btn-primary btn-icon btn-icon-end rounded-xl"
                  target="_blank">
                  All Reviews <i className="uil uil-arrow-up-right"></i>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ========== think unique and make section ========== */}
        <section className="wrapper overflow-hidden">
          <div className="container pt-16 pt-md-18 text-center position-relative">
            <div className="position-absolute" style={{ top: "-7%", left: "50%", transform: "translateX(-50%)" }}>
              <img src="/img/photos/blurry.png" alt="" />
            </div>

            <div className="row position-relative mb-9 mb-md-11">
              <div className="col-lg-10 col-xl-9 col-xxl-7 mx-auto">
                <div>
                  <img src="/img/demos/icon-grape.png" srcSet="/img/demos/icon-grape@2x.png 2x" alt="" />
                  <h1 className="display-1 fs-64 mt-5 mb-5">Think unique and make a difference with Sandbox.</h1>
                  <p className="lead fs-24 mb-8 px-lg-12 px-xl-14 px-xxl-10">
                    We are trusted by thousands of clients. Join them now and easily create your stunning website in no
                    time.
                  </p>
                </div>

                <div className="d-flex justify-content-center">
                  <span>
                    <a
                      href="https://cutt.ly/P4rW6e4"
                      className="btn btn-lg btn-primary btn-icon btn-icon-end rounded-xl"
                      target="_blank">
                      Buy Sandbox <i className="uil uil-arrow-up-right" />
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="container text-center">
            <img
              alt=""
              src="/img/demos/f1.png"
              srcSet="/img/demos/f1@2x.png 2x"
              className="img-fluid position-relative"
              style={{ zIndex: 2 }}
            />
          </div>
        </section>
      </main>
    </Fragment>
  );
}
