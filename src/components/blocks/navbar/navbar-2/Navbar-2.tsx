"use client";

import { Fragment, useRef } from "react";
// GLOBAL CUSTOM HOOKS
import useSticky from "hooks/useSticky";
import useNestedDropdown from "hooks/useNestedDropdown";
// LOCAL CUSTOM COMPONENTS
import Info from "../components/Info";
import Language from "../components/language";
import BlogNavItem from "../components/blog-nav-item";
import DemosNavItem from "../components/demos-nav-item";
import PagesNavItem from "../components/pages-nav-item";
import BlocksNavItem from "../components/blocks-nav-item";
import ProjectsNavItem from "../components/projects-nav-item";
import DocumentationNavItem from "../components/documentation-nav-item";
// GLOBAL CUSTOM COMPONENTS
import NextLink from "components/reuseable/links/NextLink";
import SocialLinks from "components/reuseable/SocialLinks";

// ===================================================================
type Navbar2Props = { navClassName?: string };
// ===================================================================

export default function Navbar2({
  navClassName = "navbar navbar-expand-lg extended navbar-light navbar-bg-light caret-none"
}: Navbar2Props) {
  useNestedDropdown();
  const sticky = useSticky(350);
  const navbarRef = useRef<HTMLElement | null>(null);

  // dynamically added navbar classname
  const fixedClassName = `navbar navbar-expand-lg extended navbar-light navbar-bg-light caret-none navbar-clone fixed navbar-stick`;

  return (
    <Fragment>
      <div style={{ paddingTop: sticky ? navbarRef.current?.clientHeight : 0 }} />

      <nav ref={navbarRef} className={sticky ? fixedClassName : navClassName}>
        <div className="container flex-lg-column">
          <div className="topbar d-flex flex-row w-100 justify-content-between align-items-center">
            <div className="navbar-brand">
              <NextLink
                href="/"
                title={<img alt="logo" src="/img/logo-dark.png" srcSet="/img/logo-dark@2x.png 2x" />}
              />
            </div>

            <div className="navbar-other ms-auto">
              <ul className="navbar-nav flex-row align-items-center">
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="offcanvas" data-bs-target="#offcanvas-info">
                    <i className="uil uil-info-circle" />
                  </a>
                </li>

                <Language />

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

          <div className="navbar-collapse-wrapper bg-white d-flex flex-row align-items-center">
            <div
              id="offcanvas-nav"
              data-bs-scroll="true"
              className="navbar-collapse offcanvas offcanvas-nav offcanvas-start">
              <div className="offcanvas-header d-lg-none">
                <h3 className="text-white fs-30 mb-0">Sandbox</h3>
                <button
                  type="button"
                  aria-label="Close"
                  data-bs-dismiss="offcanvas"
                  className="btn-close btn-close-white"
                />
              </div>

              <div className="offcanvas-body d-flex flex-column h-100">
                <ul className="navbar-nav">
                  {/* ===================== demos nav item ===================== */}
                  <DemosNavItem />

                  {/*  ===================== pages nav item  ===================== */}
                  <PagesNavItem />

                  {/* ===================== projects nav item  ===================== */}
                  <ProjectsNavItem />

                  {/* ===================== blog nav item ===================== */}
                  <BlogNavItem />

                  {/* ===================== blocks nav item ===================== */}
                  <BlocksNavItem />

                  {/* ===================== documentation nav item ===================== */}
                  <DocumentationNavItem />
                </ul>

                {/* ============= show contact info in the small device sidebar ============= */}
                <div className="offcanvas-footer d-lg-none">
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

            {/* ============= right side header content ============= */}
            <div className="navbar-other ms-auto w-100 d-none d-lg-block">
              <SocialLinks className="nav social social-muted justify-content-end text-end" />
            </div>
          </div>
        </div>
      </nav>

      {/* ============= info sidebar ============= */}
      <Info />
    </Fragment>
  );
}
