import clsx from "clsx";

// =================================================
interface TestimonialCard5Props {
  name: string;
  review: string;
  designation: string;
  borderBottom?: boolean;
}
// =================================================

export default function TestimonialCard5({ name, review, designation, borderBottom }: TestimonialCard5Props) {
  // ROOT CLASS NAME
  const className = clsx({
    "card shadow-lg": true,
    "card-border-bottom border-soft-primary": borderBottom
  });

  return (
    <div className={className}>
      <div className="card-body">
        <span className="ratings five mb-3" />
        <blockquote className="icon mb-0">
          <p>“{review}”</p>
          <div className="blockquote-details">
            <div className="info ps-0">
              <h5 className="mb-1">{name}</h5>
              <p className="mb-0">{designation}</p>
            </div>
          </div>
        </blockquote>
      </div>
    </div>
  );
}
