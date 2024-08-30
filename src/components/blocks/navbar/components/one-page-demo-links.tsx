import { Link as ScrollLink } from "react-scroll";
// -------- data -------- //
const linkList = [
  { id: 1, title: "Home", to: "home" },
  { id: 2, title: "Services", to: "services" },
  { id: 3, title: "Portfolio", to: "portfolio" },
  { id: 4, title: "Testimonials", to: "testimonials" },
  { id: 5, title: "About", to: "about" },
  { id: 6, title: "Pricing", to: "pricing" }
];

export default function OnePageDemoLinks() {
  return (
    <ul className="navbar-nav">
      {linkList.map(({ id, title, to }) => (
        <li className="nav-item" key={id}>
          <ScrollLink href="#" smooth spy activeClass="active" to={to} className="nav-link scroll">
            {title}
          </ScrollLink>
        </li>
      ))}
    </ul>
  );
}
