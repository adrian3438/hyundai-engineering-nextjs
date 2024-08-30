import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Navbar from "components/blocks/navbar/navbar-1";
import { Hero26 } from "components/blocks/hero";
import { About27 } from "components/blocks/about";
import { Footer17 } from "components/blocks/footer";
import { Pricing9 } from "components/blocks/pricing";
import { Process16 } from "components/blocks/process";
import { Contact13 } from "components/blocks/contact";
import { Services28 } from "components/blocks/services";
import { CTA10 } from "components/blocks/call-to-action";
import { Testimonial20 } from "components/blocks/testimonial";
import NextLink from "components/reuseable/links/NextLink";

export default function Demo26() {
  return (
    <Fragment>
      {/* ========== header ========== */}
      <header className="wrapper bg-soft-primary">
        <Navbar button={<NextLink href="#" title="Free Trial" className="btn btn-sm btn-primary rounded" />} />
      </header>

      {/* ========== main content ========== */}
      <main className="content-wrapper">
        {/* ========== hero section ========== */}
        <Hero26 />

        <section className="wrapper bg-white">
          <div className="container pt-15 pb-15 pb-md-17">
            {/* ========== what do we do section ========== */}
            <Services28 />

            {/* ========== why choose us section ========== */}
            <About27 />

            {/* ========== our solutions section ========== */}
            <Process16 />

            {/* ========== happy customers section ========== */}
            <Testimonial20 />

            {/* ========== our pricing section ========== */}
            <Pricing9 />

            {/* ========== let's talk section ========== */}
            <Contact13 />
          </div>
        </section>

        {/* ========== analyze now section ========== */}
        <CTA10 />
      </main>

      {/* ========== footer section ========== */}
      <Footer17 />
    </Fragment>
  );
}
