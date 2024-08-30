import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Navbar from "components/blocks/navbar/navbar-1";
import { Hero33 } from "components/blocks/hero";
import { About34 } from "components/blocks/about";
import { Footer22 } from "components/blocks/footer";
import { Services36 } from "components/blocks/services";
import { CTA13 } from "components/blocks/call-to-action";
import { Portfolio17 } from "components/blocks/portfolio";
import { Testimonial27 } from "components/blocks/testimonial";
import NextLink from "components/reuseable/links/NextLink";

export default function Demo33() {
  return (
    <Fragment>
      {/* ========== header section ========== */}
      <header className="wrapper bg-soft-primary my-1">
        <Navbar
          button={<NextLink title="Contact Me" href="#" className="btn btn-sm btn-primary" />}
          navClassName="navbar navbar-expand-lg center-nav navbar-light navbar-bg-light"
        />
      </header>

      {/* ========== main content ========== */}
      <main className="content-wrapper">
        {/* ========== hero section ========== */}
        <Hero33 />

        {/* ========== service & projects section ========== */}
        <section className="wrapper bg-light">
          <div className="container py-16 py-md-18">
            {/* ========== the service section ========== */}
            <Services36 />

            {/* ========== latest projects section ========== */}
            <Portfolio17 />
          </div>
        </section>

        {/* ========== testimonial section ========== */}
        <Testimonial27 />

        {/* ========== about me section ========== */}
        <About34 />

        {/* ========== contact me section ========== */}
        <CTA13 />
      </main>

      {/* ========== footer section ========== */}
      <Footer22 />
    </Fragment>
  );
}
