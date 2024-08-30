"use client";

import { Fragment, PropsWithChildren } from "react";
import { usePathname } from "next/navigation";
// GLOBAL CUSTOM COMPONENTS
import { Footer8 } from "components/blocks/footer";
import Navbar from "components/blocks/navbar/navbar-1";
import NextLink from "components/reuseable/links/NextLink";

export default function ServiceLayout({ children }: PropsWithChildren) {
  const pathname = usePathname();

  return (
    <Fragment>
      {/* ========== header section ========== */}
      <header className="wrapper bg-soft-primary">
        {pathname === "/services-2" ? (
          <Navbar
            language
            logoAlt="logo-light"
            navClassName="navbar navbar-expand-lg center-nav transparent position-absolute navbar-dark"
            button={<NextLink title="Contact" href="#" className="btn btn-sm btn-primary rounded-pill" />}
          />
        ) : (
          <Navbar
            language
            button={<NextLink title="Contact" href="#" className="btn btn-sm btn-primary rounded-pill" />}
          />
        )}
      </header>

      <main className="content-wrapper">{children}</main>

      {/* ========== footer section ========== */}
      <Footer8 />
    </Fragment>
  );
}
