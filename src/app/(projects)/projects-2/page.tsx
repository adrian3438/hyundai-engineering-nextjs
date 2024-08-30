"use client";

import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import { Footer8 } from "components/blocks/footer";
import Navbar from "components/blocks/navbar/navbar-1";
import Pagination from "components/reuseable/Pagination";
import NextLink from "components/reuseable/links/NextLink";
import { ProjectCard2 } from "components/reuseable/project-cards";
// CUSTOM DATA
import { projectList } from "./data";

export default function ProjectsTwo() {
  return (
    <Fragment>
      {/* ========== header section ========== */}
      <header className="wrapper bg-light">
        <Navbar
          language
          button={<NextLink title="Contact" href="#" className="btn btn-sm btn-primary rounded-pill" />}
        />
      </header>

      <main className="content-wrapper">
        {/* ========== title section ========== */}
        <section className="wrapper bg-light">
          <div className="container pt-10 pt-md-14 text-center">
            <div className="row">
              <div className="col-md-8 col-lg-7 col-xl-6 col-xxl-5 mx-auto">
                <h1 className="display-1 mb-3">Projects</h1>
                <p className="lead fs-lg px-lg-10 px-xxl-8">
                  Check out some of our awesome projects with creative ideas and great design.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="wrapper bg-light">
          <div className="container pt-9 pt-md-11 pb-14 pb-md-16">
            {/* ========== projects section ========== */}
            <div className="projects-overflow mt-md-10 mb-10 mb-lg-15">
              {projectList.map((item) => (
                <ProjectCard2 {...item} key={item.id} />
              ))}
            </div>

            {/* ========== pagination section ========== */}
            <Pagination />
          </div>
        </section>
      </main>

      {/* ========== footer section ========== */}
      <Footer8 />
    </Fragment>
  );
}
