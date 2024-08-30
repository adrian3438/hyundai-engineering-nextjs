// GLOBAL CUSTOM COMPONENTS
import ListItemLink from "components/reuseable/links/ListItemLink";
import DropdownToggleLink from "components/reuseable/links/DropdownToggleLink";
// LOCAL CUSTOM COMPONENTS
import renderLinks from "./render-links";
// CUSTOM DATA
import { blogsNavigation } from "data/navigation";

export default function BlogNavItem() {
  return (
    <li className="nav-item dropdown">
      <DropdownToggleLink title="Blog" className="nav-link dropdown-toggle" />

      <ul className="dropdown-menu">
        {blogsNavigation.map(({ id, url, title, children }) => {
          if (!url && children) {
            return (
              <li className="dropdown dropdown-submenu dropend" key={id}>
                <DropdownToggleLink title="Blog Posts" />
                <ul className="dropdown-menu">{renderLinks(children)}</ul>
              </li>
            );
          }
          return <ListItemLink key={id} href={url} title={title} linkClassName="dropdown-item" />;
        })}
      </ul>
    </li>
  );
}
