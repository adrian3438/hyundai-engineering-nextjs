import BlogNavItem from "./blog-nav-item";
import DemosNavItem from "./demos-nav-item";
import PagesNavItem from "./pages-nav-item";
import ProjectsNavItem from "./projects-nav-item";

export default function Navigation() {
  return (
    <ul className="navbar-nav">
      {/* ===================== demos nav item ===================== */}
      <DemosNavItem />

      {/*  ===================== pages nav item  ===================== */}
      <PagesNavItem />

      {/* ===================== projects nav item  ===================== */}
      <ProjectsNavItem />

      {/* ===================== blog nav item ===================== */}
      <BlogNavItem />
    </ul>
  );
}
