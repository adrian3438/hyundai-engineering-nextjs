import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Navbar from "components/blocks/navbar/navbar-1";
import { Hero3 } from "components/blocks/hero";
import { Blog1 } from "components/blocks/blog";
import { About3 } from "components/blocks/about";
import { Facts1 } from "components/blocks/facts";
import { Footer5 } from "components/blocks/footer";
import { Process3 } from "components/blocks/process";
import { Contact1 } from "components/blocks/contact";
import { Pricing3 } from "components/blocks/pricing";
import { Services4 } from "components/blocks/services";
import { CTA4 } from "components/blocks/call-to-action";
import { Testimonial2 } from "components/blocks/testimonial";
import NextLink from "components/reuseable/links/NextLink";

export default function Demo3() {
  return (
    <Fragment>
      {/* ========== header section ========== */}
      <header className="wrapper bg-dark">
        <Navbar
          search
          logoAlt="logo-light"
          navClassName="navbar navbar-expand-lg center-nav transparent navbar-dark"
          button={<NextLink title="Contact" href="#" className="btn btn-sm btn-primary rounded" />}
        />
      </header>

      <main className="content-wrapper">
        {/* ========== hero section ========== */}
        <Hero3 />

        <section className="wrapper bg-light">
          <div className="container pt-19 pt-md-21 pb-16 pb-md-18">
            {/* ========== what we do section ========== */}
            <Services4 />

            {/* ========== how it works section ========== */}
            <Process3 />

            {/* ========== why choose us section ========== */}
            <About3 />
          </div>
        </section>

        {/* ========== call to action section ========== */}
        <CTA4 />

        {/* ========== case studies section ========== */}
        <Blog1 />

        {/* ========== company facts section ========== */}
        <Facts1 />

        <section className="wrapper bg-light angled upper-end lower-start">
          <div className="container py-16 py-md-18 position-relative">
            {/* ========== client reviews section ========== */}
            <Testimonial2 />

            {/* ========== our pricing section ========== */}
            <Pricing3 />

            {/* ========== contact section ========== */}
            <Contact1 />
          </div>
        </section>
      </main>

      {/* ========== footer section ========== */}
      <Footer5 />
    </Fragment>
  );
}
