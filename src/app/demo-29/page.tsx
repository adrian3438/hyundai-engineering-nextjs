import { Fragment } from "react";

// GLOBAL CUSTOM COMPONENTS
import Navbar from "components/blocks/navbar/navbar-1";
import { FAQ8 } from "components/blocks/faq";
import { Hero29 } from "components/blocks/hero";
import { About30 } from "components/blocks/about";
import { Footer4 } from "components/blocks/footer";
import { Process19 } from "components/blocks/process";
import { Services31 } from "components/blocks/services";
import { CTA11 } from "components/blocks/call-to-action";
import { Testimonial23 } from "components/blocks/testimonial";
import VideoPlyr from "components/reuseable/VideoPlyr";

export default function Demo29() {
  return (
    <Fragment>
      {/* ========== header ========== */}
      <header className="wrapper">
        <Navbar
          info
          language
          navClassName="navbar navbar-expand-lg center-nav transparent position-absolute navbar-light caret-none"
        />
      </header>

      {/* ========== main content ========== */}
      <main className="content-wrapper">
        {/* ========== hero section ========== */}
        <Hero29 />

        {/* ========== app & works sections ========== */}
        <section className="wrapper bg-light">
          <div className="container pt-18 pt-md-20 pb-14 pb-md-16">
            {/* ========== app feature section ========== */}
            <Services31 />

            {/* ========== how it works section ========== */}
            <Process19 />
          </div>
        </section>

        {/* ========== plyr & faq section ========== */}
        <section
          className="wrapper image-wrapper bg-full bg-image bg-overlay bg-overlay-light-600 bg-content"
          style={{ backgroundImage: "url(/img/photos/bg23.png)" }}>
          <div className="container py-14 pt-md-16 pt-lg-0 pb-md-17 position-relative" style={{ zIndex: 2 }}>
            <div className="row">
              <div className="col-xl-11 col-xxl-10 mx-auto">
                {/* ========== video plyr section ========== */}
                <div className="mt-lg-n20 mt-xl-n22 mb-14 mb-md-16 rounded-xl">
                  <VideoPlyr
                    options={{ loadSprite: true, clickToPlay: true }}
                    source={{ type: "video", sources: [{ src: "165101721", provider: "vimeo" }] }}
                  />
                </div>

                {/* ========== faq section ========== */}
                <FAQ8 />
              </div>
            </div>
          </div>
        </section>

        {/* ========== choose & customers sections ========== */}
        <section className="wrapper bg-light">
          <div className="container py-16 py-md-18">
            {/* ========== why choose us section ========== */}
            <About30 />

            {/* ========== happy customers section ========== */}
            <Testimonial23 />
          </div>
        </section>

        {/* ========== call-to-action section ========== */}
        <CTA11 />
      </main>

      {/* ========== footer section ========== */}
      <Footer4 />
    </Fragment>
  );
}
