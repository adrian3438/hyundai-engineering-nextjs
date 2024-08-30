import { HTMLAttributes } from "react";
import IconBox from "../IconBox";
import NextLink from "../links/NextLink";

// ================================================
interface ServiceCard2Props {
  icon: string;
  title: string;
  linkUrl: string;
  description: string;
  titleColor?: string;
  hiddenBtn?: boolean;
  iconBoxClassNames?: HTMLAttributes<HTMLDivElement>["className"];
}
// ================================================

export default function ServiceCard2({
  icon,
  title,
  linkUrl,
  hiddenBtn,
  titleColor,
  description,
  iconBoxClassNames = "icon btn btn-circle btn-lg btn-primary pe-none mb-5"
}: ServiceCard2Props) {
  return (
    <div className="col-md-6 col-lg-3">
      <IconBox icon={icon} className={iconBoxClassNames} />
      <h4 className={titleColor}>{title}</h4>
      <p className="mb-3">{description}</p>
      {hiddenBtn ? null : <NextLink title="Learn More" href={linkUrl} className="more hover" />}
    </div>
  );
}
