import Navbar from "components/blocks/navbar/navbar-1";
import { Hero32 } from "components/blocks/hero";
import { Blog8 } from "components/blocks/blog";
import { Team9 } from "components/blocks/team";
import { Footer8 } from "components/blocks/footer";
import { CTA12 } from "components/blocks/call-to-action";
import { About32, About33 } from "components/blocks/about";
import { Testimonial26 } from "components/blocks/testimonial";
import { Services34, Services35 } from "components/blocks/services";

import VideoPlayer from "./video-player";

export default function Demo32() {
  return (
    <div className="box-layout">
      {/* ========== header section ========== */}
      <header className="position-absolute w-100 pt-1">
        <Navbar
          info
          search
          logoAlt="logo-light"
          navClassName="navbar navbar-expand-lg center-nav transparent navbar-dark caret-none"
        />
      </header>

      {/* ========== main content ========== */}
      <main className="content-wrapper">
        {/* ========== hero section ========== */}
        <Hero32 />

        {/* ========== plyr & about section ========== */}
        <section className="wrapper bg-light">
          <div className="container py-15 py-md-17 position-relative">
            {/* ========== video plyr section ========== */}
            <VideoPlayer />

            {/* ========== who are we section ========== */}
            <About32 />
          </div>
        </section>

        {/* ========== our services section ========== */}
        <Services34 />

        {/* ========== what make us section ========== */}
        <About33 />

        {/* ========== blog section ========== */}
        <Blog8 />

        {/* ========== why choose sandbox section ========== */}
        <Services35 />

        {/* ========== our team section ========== */}
        <Team9 />

        {/* ========== testimonial & community section ========== */}
        <section className="wrapper gradient-8 bg-lines">
          <div className="container py-15 pt-md-0 pb-md-17 text-center">
            {/* ========== testimonial section ========== */}
            <Testimonial26 />

            {/* ========== our community section ========== */}
            <CTA12 />
          </div>
        </section>
      </main>

      {/* ========== footer section ========== */}
      <Footer8 />
    </div>
  );
}
