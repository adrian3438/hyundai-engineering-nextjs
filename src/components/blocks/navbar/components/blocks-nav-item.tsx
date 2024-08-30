import Link from "next/link";
// GLOBAL CUSTOM COMPONENTS
import DropdownToggleLink from "components/reuseable/links/DropdownToggleLink";
// CUSTOM DATA
import { blocksNavigation } from "data/navigation";

export default function BlocksNavItem() {
  return (
    <li className="nav-item dropdown dropdown-mega">
      <DropdownToggleLink title="Blocks" className="nav-link dropdown-toggle" />
      <ul className="dropdown-menu mega-menu mega-menu-dark mega-menu-img">
        <li className="mega-menu-content">
          <ul className="row row-cols-1 row-cols-lg-6 gx-0 gx-lg-6 gy-lg-4 list-unstyled">
            {blocksNavigation.map(({ id, thumnail, title, url }) => (
              <li className="col" key={id}>
                <Link href={url} className="dropdown-item">
                  <div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2">
                    <img className="rounded-0" src={thumnail} alt="" />
                  </div>

                  <span>{title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </li>
  );
}
