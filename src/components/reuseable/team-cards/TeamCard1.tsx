import Image from "next/image";
import clsx from "clsx";

import IconLink from "../links/IconLink";

// ==========================================================
interface TeamCard1Props {
  name: string;
  image: string;
  shadow?: boolean;
  twitterUrl: string;
  designation: string;
  description: string;
  facebookUrl: string;
  dribbbleUrl: string;
}
// ==========================================================

export default function TeamCard1({
  name,
  image,
  twitterUrl,
  description,
  designation,
  facebookUrl,
  dribbbleUrl,
  shadow = false
}: TeamCard1Props) {
  return (
    <div className={clsx({ card: true, "shadow-lg": shadow })}>
      <div className="card-body">
        <div className="rounded-circle w-15 mb-4 overflow-hidden">
          <Image src={image} width={300} height={300} alt="Team Member" className="w-100 h-auto" />
        </div>

        <h4 className="mb-1">{name}</h4>
        <div className="meta mb-2">{designation}</div>
        <p className="mb-2">{description}</p>

        <nav className="nav social mb-0">
          <IconLink href={twitterUrl} icon={<i className="uil uil-twitter" />} />
          <IconLink href={facebookUrl} icon={<i className="uil uil-facebook-f" />} />
          <IconLink href={dribbbleUrl} icon={<i className="uil uil-dribbble" />} />
        </nav>
      </div>
    </div>
  );
}
