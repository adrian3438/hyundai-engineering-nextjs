import clsx from "clsx";
import Link from "next/link";

// ========================================================================
interface JobPostCard2Props {
  link: string;
  time: string;
  title: string;
  avatar: string;
  location: string;
  avatarColor: string;
}
// ========================================================================

export default function JobPostCard2(props: JobPostCard2Props) {
  const { time, location, title, avatarColor, avatar, link } = props;

  const AVATAR_CLASS = clsx({
    "avatar text-white w-9 h-9 fs-17 me-3": true,
    [avatarColor]: Boolean(avatarColor)
  });

  return (
    <Link href={link} className="card mb-4 lift">
      <div className="card-body p-5">
        <span className="row justify-content-between align-items-center">
          <span className="col-md-5 mb-2 mb-md-0 d-flex align-items-center text-body">
            <span className={AVATAR_CLASS}>{avatar}</span> {title}
          </span>

          <span className="col-5 col-md-3 text-body d-flex align-items-center">
            <i className="uil uil-clock me-1" /> {time}
          </span>

          <span className="col-7 col-md-4 col-lg-3 text-body d-flex align-items-center">
            <i className="uil uil-location-arrow me-1" /> {location}
          </span>

          <span className="d-none d-lg-block col-1 text-center text-body">
            <i className="uil uil-angle-right-b" />
          </span>
        </span>
      </div>
    </Link>
  );
}
