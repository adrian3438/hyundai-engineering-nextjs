import { HTMLAttributes } from "react";
import IconBox from "../IconBox";
import NextLink from "../links/NextLink";

// ================================================
type ServiceCard6Props = {
  icon: string;
  title: string;
  linkUrl: string;
  description: string;
  iconBoxClassNames?: HTMLAttributes<HTMLDivElement>["className"];
};
// ================================================

export default function ServiceCard6({
  icon,
  title,
  linkUrl,
  description,
  iconBoxClassNames = "icon btn btn-circle btn-lg btn-primary pe-none mb-5"
}: ServiceCard6Props) {
  return (
    <div className="col-md-6 col-lg-3">
      <div className="card">
        <div className="card-body">
          <IconBox icon={icon} className={iconBoxClassNames} />
          <h4>{title}</h4>
          <p className="mb-3">{description}</p>
          <NextLink title="Learn More" href={linkUrl} className="more hover" />
        </div>
      </div>
    </div>
  );
}
