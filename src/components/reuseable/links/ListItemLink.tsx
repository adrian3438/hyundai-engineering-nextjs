import { ReactElement } from "react";
import NextLink from "./NextLink";

// =========================================================
interface ListItemLinkProps {
  href: string;
  liClassName?: string;
  linkClassName?: string;
  title: string | ReactElement;
}
// =========================================================

export default function ListItemLink({
  href,
  title,
  liClassName = "nav-item",
  linkClassName = "nav-link"
}: ListItemLinkProps) {
  return (
    <li className={liClassName}>
      <NextLink className={linkClassName} href={href} title={title} />
    </li>
  );
}
