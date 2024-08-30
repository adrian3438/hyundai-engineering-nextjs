import clsx from "clsx";
import NextLink from "./links/NextLink";

// ==========================================================
interface PaginationProps {
  className?: string;
  altStyle?: boolean;
}
// ==========================================================

export default function Pagination({ altStyle = false, className = "justify-content-center" }: PaginationProps) {
  return (
    <nav className={`d-flex ${className}`} aria-label="pagination">
      <ul className={clsx({ pagination: true, "pagination-alt": altStyle })}>
        <li className="page-item disabled">
          <NextLink href="#" className="page-link" title={<i className="uil uil-arrow-left" />} />
        </li>

        {[1, 2, 3].map((item, i) => (
          <li className={clsx({ "page-item": true, active: i === 0 })} key={item}>
            <button className="page-link">{item}</button>
          </li>
        ))}

        <li className="page-item">
          <NextLink href="#" className="page-link" title={<i className="uil uil-arrow-right" />} />
        </li>
      </ul>
    </nav>
  );
}
