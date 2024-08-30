import { HTMLAttributes } from "react";

// ====================================================
type IconBoxProps = {
  icon: string;
  className?: HTMLAttributes<HTMLDivElement>["className"];
};
// ====================================================

export default function IconBox({ icon, className }: IconBoxProps) {
  return (
    <div className={className}>
      <i className={`uil ${icon}`} />
    </div>
  );
}
