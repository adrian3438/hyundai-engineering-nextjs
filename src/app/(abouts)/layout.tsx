"use client";

import { Fragment, PropsWithChildren } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
// GLOBAL CUSTOM COMPONENTS
import { Footer8 } from "components/blocks/footer";
import Navbar from "components/blocks/navbar/navbar-1";
import NextLink from "components/reuseable/links/NextLink";

export default function AboutLayout({ children }: PropsWithChildren) {
  const pathname = usePathname();

  return (
    <Fragment>
      {/* ========== header section ========== */}
      <header
        className={clsx({
          wrapper: true,
          "bg-gray": pathname === "/about-1",
          "bg-soft-primary": pathname === "/about-2"
        })}>
        <Navbar
          language
          button={<NextLink title="Contact" href="#" className="btn btn-sm btn-primary rounded-pill" />}
        />
      </header>

      <main className="content-wrapper">{children}</main>

      {/* ========== footer section ========== */}
      <Footer8 />
    </Fragment>
  );
}
