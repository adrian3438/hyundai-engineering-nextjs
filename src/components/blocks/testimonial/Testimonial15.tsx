import { TestimonialCard6 } from "components/reuseable/testimonial-cards";
// CUSTOM DATA
import { testimonialList4 } from "data/testimonial-list";

export default function Testimonial14() {
  return (
    <div className="grid mb-18">
      <div className="row isotope gy-6 mt-n18">
        {testimonialList4.map((item) => (
          <div className="item col-md-6 col-xl-3" key={item.id}>
            <TestimonialCard6 {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}
