import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Navbar from "components/blocks/navbar/navbar-1";
import { Blog6 } from "components/blocks/blog";
import { Hero25 } from "components/blocks/hero";
import { About26 } from "components/blocks/about";
import { Footer16 } from "components/blocks/footer";

export default function Demo25() {
  return (
    <Fragment>
      {/* ========== header ========== */}
      <header className="wrapper bg-gray">
        <Navbar navClassName="navbar navbar-expand-lg center-nav navbar-light navbar-bg-light" social />
      </header>

      {/* ========== main content ========== */}
      <main className="content-wrapper">
        <section className="wrapper bg-gray">
          <div className="container pt-10 pb-14 pb-md-16">
            {/* ========== hero section ========== */}
            <Hero25 />

            {/* ========== about me section ========== */}
            <About26 />

            {/* ========== blog conent and sidebar section ========== */}
            <Blog6 />
          </div>
        </section>
      </main>

      {/* ========== footer section ========== */}
      <Footer16 />
    </Fragment>
  );
}
