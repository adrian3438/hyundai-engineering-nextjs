import { Fragment } from "react";
import Navbar from "components/blocks/navbar/navbar-1";

export default function Blank() {
  return (
    <Fragment>
      {/* ========== header section ========== */}
      <header className="wrapper mb-1">
        <Navbar social navClassName="navbar navbar-expand-lg center-nav transparent navbar-light caret-none" />
      </header>

      <main className="content-wrapper">
        <div className="container">
          <h1>This is blank page</h1>
        </div>
      </main>
    </Fragment>
  );
}
