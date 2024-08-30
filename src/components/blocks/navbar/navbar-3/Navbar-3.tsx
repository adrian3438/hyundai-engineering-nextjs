"use client";

import { Fragment, useRef } from "react";
// GLOBAL CUSTOM HOOKS
import useSticky from "hooks/useSticky";
import useNestedDropdown from "hooks/useNestedDropdown";
// GLOBAL CUSTOM COMPONENTS
import NextLink from "components/reuseable/links/NextLink";
import SocialLinks from "components/reuseable/SocialLinks";
// LOCAL CUSTOM COMPONENTS
import BlogNavItem from "../components/blog-nav-item";
import DemosNavItem from "../components/demos-nav-item";
import PagesNavItem from "../components/pages-nav-item";
import BlocksNavItem from "../components/blocks-nav-item";
import ProjectsNavItem from "../components/projects-nav-item";
import DocumentationNavItem from "../components/documentation-nav-item";

// ===================================================================
interface Navbar3Props {
  logoAlt: string;
  stickyBox?: boolean;
  navClassName?: string;
}
// ===================================================================

export default function Navbar3({
  logoAlt,
  stickyBox = true,
  navClassName = "navbar navbar-expand-lg center-logo transparent position-absolute navbar-dark"
}: Navbar3Props) {
  useNestedDropdown();
  const sticky = useSticky(350);
  const navbarRef = useRef<HTMLElement | null>(null);

  // dynamically added navbar classname
  const fixedClassName = `navbar navbar-expand-lg center-logo transparent position-absolute navbar-light navbar-clone fixed`;

  const logos = (
    <>
      <img className="logo-dark" src={`/img/${logoAlt}.png`} srcSet={`/img/${logoAlt}@2x.png 2x`} alt={logoAlt} />
      <img className="logo-light" src="/img/logo-light.png" srcSet="/img/logo-light@2x.png 2x" alt="logo-light" />
    </>
  );

  return (
    <Fragment>
      {stickyBox && <div style={{ paddingTop: sticky ? navbarRef.current?.clientHeight : 0 }} />}

      <nav ref={navbarRef} className={sticky ? fixedClassName : navClassName}>
        <div className="container justify-content-between align-items-center">
          <div className="d-flex flex-row w-100 justify-content-between align-items-center d-lg-none">
            <div className="navbar-brand">
              <NextLink href="/" title={logos} />
            </div>

            <div className="navbar-other ms-auto">
              <ul className="navbar-nav flex-row align-items-center">
                <li className="nav-item d-lg-none">
                  <button
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvas-nav"
                    className="hamburger offcanvas-nav-btn">
                    <span />
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="navbar-collapse-wrapper d-flex flex-row align-items-center w-100">
            <div
              id="offcanvas-nav"
              data-bs-scroll="true"
              className="navbar-collapse offcanvas offcanvas-nav offcanvas-start">
              <div className="offcanvas-header mx-lg-auto order-0 order-lg-1 d-lg-flex px-lg-15">
                <NextLink href="/" className="transition-none d-none d-lg-flex" title={logos} />
                <h3 className="text-white fs-30 mb-0 d-lg-none">Sandbox</h3>
                <button
                  type="button"
                  aria-label="Close"
                  data-bs-dismiss="offcanvas"
                  className="btn-close btn-close-white d-lg-none"
                />
              </div>

              <div className="w-100 order-1 order-lg-0 d-lg-flex offcanvas-body">
                <div className="navbar-nav ms-lg-auto">
                  {/* ===================== demos nav item ===================== */}
                  <DemosNavItem />

                  {/*  ===================== pages nav item  ===================== */}
                  <PagesNavItem />

                  {/* ===================== projects nav item  ===================== */}
                  <ProjectsNavItem />
                </div>
              </div>

              <div className="w-100 order-3 order-lg-2 d-lg-flex offcanvas-body">
                <div className="navbar-nav me-lg-auto">
                  {/* ===================== blog nav item ===================== */}
                  <BlogNavItem />

                  {/* ===================== block nav item ===================== */}
                  <BlocksNavItem />

                  {/* ===================== documentation nav item ===================== */}
                  <DocumentationNavItem />
                </div>
              </div>

              {/* ============= show contact info in the small device sidebar ============= */}
              <div className="offcanvas-body d-lg-none order-4 mt-auto">
                <div className="offcanvas-footer">
                  <div>
                    <NextLink title="info@email.com" className="link-inverse" href="mailto:first.last@email.com" />
                    <br />
                    <NextLink href="tel:0123456789" title="00 (123) 456 78 90" />
                    <br />
                    <SocialLinks />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
}
