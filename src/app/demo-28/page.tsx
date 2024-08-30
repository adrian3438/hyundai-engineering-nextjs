import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Navbar from "components/blocks/navbar/navbar-1";
import { Hero28 } from "components/blocks/hero";
import { About29 } from "components/blocks/about";
import { Facts18 } from "components/blocks/facts";
import { Footer19 } from "components/blocks/footer";
import { Process18 } from "components/blocks/process";
import { Contact14 } from "components/blocks/contact";
import { Services30 } from "components/blocks/services";
import { Portfolio13 } from "components/blocks/portfolio";
import { Testimonial22 } from "components/blocks/testimonial";

export default function Demo28() {
  return (
    <Fragment>
      {/* ========== header ========== */}
      <header className="wrapper">
        <Navbar navClassName="navbar navbar-expand-lg center-nav transparent position-absolute navbar-light" social />
      </header>

      {/* ========== main content ========== */}
      <main className="content-wrapper">
        {/* ========== hero section ========== */}
        <Hero28 />

        <section className="wrapper">
          <div className="container pt-12 pt-md-0 pb-16 pb-md-18">
            {/* ========== projects section ========== */}
            <Portfolio13 />

            {/* ========== areas of expertise section ========== */}
            <Services30 />
          </div>
        </section>

        {/* ========== proud of my results section ========== */}
        <Facts18 />

        <section className="wrapper">
          <div className="container pt-12 pt-md-0 pb-15 pb-md-17">
            {/* ========== testimonial section ========== */}
            <Testimonial22 />

            {/* ========== about me section ========== */}
            <About29 />

            {/* ========== working process section ========== */}
            <Process18 />
          </div>
        </section>

        {/* ========== contact section ========== */}
        <Contact14 />
      </main>

      {/* ========== footer section ========== */}
      <Footer19 />
    </Fragment>
  );
}
