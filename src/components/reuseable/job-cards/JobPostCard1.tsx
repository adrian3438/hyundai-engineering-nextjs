import clsx from "clsx";

// ========================================================================
interface JobPostCard1Props {
  time: string;
  title: string;
  company: string;
  location: string;
  badgeColor: string;
  avatarColor: string;
}
// ========================================================================

export default function JobPostCard1(props: JobPostCard1Props) {
  const { time, title, location, company, avatarColor, badgeColor } = props;

  const COMPANY_CLASS = clsx({
    "avatar text-white w-11 h-11 fs-20 me-4": true,
    [avatarColor]: Boolean(avatarColor)
  });

  const TIME_CLASS = clsx({
    "badge rounded py-1 mb-2": true,
    [badgeColor]: Boolean(badgeColor)
  });

  return (
    <div className="col-md-6 col-lg-4">
      <div className="card shadow-lg lift h-100">
        <div className="card-body p-5 d-flex flex-row">
          <div>
            <span className={COMPANY_CLASS}>{company}</span>
          </div>

          <div>
            <span className={TIME_CLASS}>{time}</span>
            <h4 className="mb-1">{title}</h4>
            <p className="mb-0 text-body">{location}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
