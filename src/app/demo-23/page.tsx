import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Navbar from "components/blocks/navbar/navbar-1";
import { Blog5 } from "components/blocks/blog";
import { Hero23 } from "components/blocks/hero";
import { About24 } from "components/blocks/about";
import { Footer9 } from "components/blocks/footer";
import { Banner5 } from "components/blocks/banner";
import { Services26 } from "components/blocks/services";
import { CTA9 } from "components/blocks/call-to-action";
import { Portfolio4 } from "components/blocks/portfolio";
import { Testimonial18 } from "components/blocks/testimonial";

export default function Demo23() {
  return (
    <Fragment>
      {/* ========== header ========== */}
      <header className="wrapper bg-soft-primary">
        <Navbar
          info
          search
          stickyBox={false}
          logoAlt="logo-light"
          navClassName="navbar navbar-expand-lg center-nav transparent position-absolute navbar-dark caret-none"
        />
      </header>

      {/* ========== main content ========== */}
      <main className="content-wrapper">
        {/* ========== hero section ========== */}
        <Hero23 />

        {/* ========== service section ========== */}
        <Services26 />

        {/* ========== testimonial section ========== */}
        <Testimonial18 />

        {/* ========== banner section ========== */}
        <Banner5 />

        {/* ========== portfolio section ========== */}
        <Portfolio4 />

        {/* ========== call to action section ========== */}
        <CTA9 />

        {/* ========== about us section ========== */}
        <About24 />

        {/* ========== blog section ========== */}
        <Blog5 />
      </main>

      {/* ========== footer section ========== */}
      <Footer9 />
    </Fragment>
  );
}
