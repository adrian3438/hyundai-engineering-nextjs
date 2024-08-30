// GLOBAL CUSTOM COMPONENTS
import ListItemLink from "components/reuseable/links/ListItemLink";
import DropdownToggleLink from "components/reuseable/links/DropdownToggleLink";
// LOCAL CUSTOM COMPONENTS
import renderLinks from "./render-links";
// CUSTOM DATA
import { documentationNavigation } from "data/navigation";

export default function DocumentationNavItem() {
  return (
    <li className="nav-item dropdown dropdown-mega">
      <DropdownToggleLink title="Documentation" className="nav-link dropdown-toggle" />
      <ul className="dropdown-menu mega-menu">
        <li className="mega-menu-content">
          <div className="row gx-0 gx-lg-3">
            <div className="col-lg-4">
              <h6 className="dropdown-header">Usage</h6>
              <ul className="list-unstyled cc-2 pb-lg-1">
                {renderLinks(documentationNavigation.usage)}
              </ul>

              <h6 className="dropdown-header mt-lg-6">Styleguide</h6>
              <ul className="list-unstyled cc-2">
                {renderLinks(documentationNavigation.styleguide)}
              </ul>
            </div>

            <div className="col-lg-8">
              <h6 className="dropdown-header">Elements</h6>
              <ul className="list-unstyled cc-3">
                {renderLinks(documentationNavigation.elements)}
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </li>
  );
}
