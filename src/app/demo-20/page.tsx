// GLOBAL CUSTOM COMPONENTS
import Navbar from "components/blocks/navbar/navbar-1";
import { Hero20 } from "components/blocks/hero";
import { Facts14 } from "components/blocks/facts";
import { About21 } from "components/blocks/about";
import { Footer12 } from "components/blocks/footer";
import { Clients5 } from "components/blocks/clients";
import { Process13 } from "components/blocks/process";
import { Services23 } from "components/blocks/services";
import { Portfolio11 } from "components/blocks/portfolio";

export default function Demo20() {
  return (
    <div className="page-frame bg-pale-primary">
      {/* ========== header ========== */}
      <header className="wrapper">
        <Navbar
          info
          language
          stickyBox={false}
          logoAlt="logo-light"
          navClassName="navbar navbar-expand-lg classic transparent position-absolute navbar-dark"
        />
      </header>

      {/* ========== main content ========== */}
      <main className="content-wrapper">
        {/* ========== hero section ========== */}
        <Hero20 />

        {/* ========== what we do section ========== */}
        <Services23 />

        {/* ========== working process section ========== */}
        <Process13 />

        {/* ========== our projects section ========== */}
        <Portfolio11 />

        {/* ========== our clients section ========== */}
        <Clients5 />

        <section className="wrapper bg-light">
          <div className="container pt-15 pt-md-17">
            {/* ========== what make us section ========== */}
            <About21 />

            {/* ========== community section ========== */}
            <Facts14 />
          </div>
        </section>
      </main>

      {/* ========== footer section ========== */}
      <Footer12 />
    </div>
  );
}
