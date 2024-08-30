import { ReactNode } from "react";
// -------- PARTIAL LOCAL COMPONENTS -------- //
import Social from "./social";
import Language from "./language";

// ===================================================================
interface HeaderRightProps {
  info?: boolean;
  cart?: boolean;
  social?: boolean;
  search?: boolean;
  button?: ReactNode;
  language?: boolean;
  navOtherClass?: string;
}
// ===================================================================

export default function HeaderRight({
  info,
  cart,
  button,
  social,
  search,
  language,
  navOtherClass
}: HeaderRightProps) {
  return (
    <div className={navOtherClass}>
      <ul className="navbar-nav flex-row align-items-center ms-auto">
        {/* ============= language dropdwown ============= */}
        {language ? <Language /> : null}

        {/* ============= info button ============= */}
        {info ? (
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="offcanvas" data-bs-target="#offcanvas-info">
              <i className="uil uil-info-circle" />
            </a>
          </li>
        ) : null}

        {/* ============= search icon button ============= */}
        {search ? (
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="offcanvas" data-bs-target="#offcanvas-search">
              <i className="uil uil-search" />
            </a>
          </li>
        ) : null}

        {/* ============= contact button ============= */}
        {button ? <li className="nav-item d-none d-md-block">{button}</li> : null}

        {/* ============= shopping cart button ============= */}
        {cart ? (
          <li className="nav-item">
            <a
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvas-cart"
              className="nav-link position-relative d-flex flex-row align-items-center">
              <i className="uil uil-shopping-cart" />
              <span className="badge badge-cart bg-primary">3</span>
            </a>
          </li>
        ) : null}

        {/* ============= social icons link ============= */}
        {social ? <Social /> : null}

        {/* ============= hamburger button for small device ============= */}
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
  );
}
