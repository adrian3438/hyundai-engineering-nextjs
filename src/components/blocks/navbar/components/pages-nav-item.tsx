// GLOBAL CUSTOM COMPONENTS
import ListItemLink from "components/reuseable/links/ListItemLink";
import DropdownToggleLink from "components/reuseable/links/DropdownToggleLink";
// LOCAL CUSTOM COMPONENTS
import renderLinks from "./render-links";
// CUSTOM DATA
import { pages } from "data/navigation";

export default function PagesNavItem() {
  return (
    <li className="nav-item dropdown">
      <DropdownToggleLink title="Pages" className="nav-link dropdown-toggle" />

      <ul className="dropdown-menu">
        {pages.map(({ id, title, children }) => {
          return (
            <li className="dropdown dropdown-submenu dropend" key={id}>
              <DropdownToggleLink title={title} className="dropdown-item dropdown-toggle" />
              <ul className="dropdown-menu">{renderLinks(children)}</ul>
            </li>
          );
        })}

        <ListItemLink href="/pricing" title="Pricing" linkClassName="dropdown-item" />
      </ul>
    </li>
  );
}
