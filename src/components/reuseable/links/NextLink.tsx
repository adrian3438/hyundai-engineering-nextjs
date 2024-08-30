import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";

// ==============================================================
interface NextLinkProps extends LinkProps {
  title: ReactNode;
  className?: string;
}
// ==============================================================

export default function NextLink({ title, ...props }: NextLinkProps) {
  return <Link {...props}>{title}</Link>;
}
