// =================================================
interface TestimonialCard1Props {
  name: string;
  review: string;
  designation: string;
}
// =================================================

export default function TestimonialCard1({ name, review, designation }: TestimonialCard1Props) {
  return (
    <div className="card shadow-lg">
      <div className="card-body">
        <blockquote className="icon mb-0">
          <p>“{review}”</p>
          <div className="blockquote-details">
            <div className="info p-0">
              <h5 className="mb-1">{name}</h5>
              <p className="mb-0">{designation}</p>
            </div>
          </div>
        </blockquote>
      </div>
    </div>
  );
}
