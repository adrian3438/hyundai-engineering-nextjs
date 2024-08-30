import { ReactElement } from "react";

// ==============================================================
type IconLinkProps = { href: string; icon: ReactElement };
// ==============================================================

export default function IconLink({ href, icon }: IconLinkProps) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      {icon}
    </a>
  );
}
