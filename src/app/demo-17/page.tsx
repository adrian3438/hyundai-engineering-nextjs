import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Navbar from "components/blocks/navbar/navbar-1";
import { Blog3 } from "components/blocks/blog";
import { Team7 } from "components/blocks/team";
import { Hero17 } from "components/blocks/hero";
import { Facts11 } from "components/blocks/facts";
import { About16 } from "components/blocks/about";
import { Footer10 } from "components/blocks/footer";
import { Process12 } from "components/blocks/process";
import { Services19 } from "components/blocks/services";
import { CTA6 } from "components/blocks/call-to-action";
import { TestimonialCard4 } from "components/reuseable/testimonial-cards";

export default function Demo17() {
  return (
    <Fragment>
      {/* ========== header ========== */}
      <header className="wrapper bg-gray">
        <Navbar social fancy navClassName="navbar navbar-expand-lg fancy navbar-light navbar-bg-light caret-none" />
      </header>

      {/* ========== main content ========== */}
      <main className="content-wrapper">
        {/* ========== hero section ========== */}
        <Hero17 />

        <section className="wrapper bg-gray">
          <div className="container">
            <div className="card shadow-none my-n13 my-md-n15 my-lg-n17">
              <div className="card-body py-12 py-lg-14 px-lg-11 py-xl-16 px-xl-13">
                {/* ========== what we do section ========== */}
                <Services19 />

                {/* ========== our strategy section ========== */}
                <Process12 />

                <hr className="my-14 my-md-16" />

                {/* ========== facts section ========== */}
                <Facts11 />

                {/* ========== testimonial sections ========== */}
                <TestimonialCard4 className="bg-gray mb-14 mb-md-17" sliderWrapperClassname="p-10 p-xl-13" />

                {/* ========== case study section ========== */}
                <Blog3 />

                <hr className="my-14 my-md-16" />

                {/* ========== team section ========== */}
                <Team7 />

                {/* ========== why choose us section ========== */}
                <About16 />

                {/* ========== call to action section ========== */}
                <CTA6 />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ========== footer section ========== */}
      <Footer10 />
    </Fragment>
  );
}
