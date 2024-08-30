"use client";
import { TestimonialCard1 } from "components/reuseable/testimonial-cards";
// CUSTOM DATA
import { testimonials } from "data/demo-28";

export default function Testimonial22() {
  return (
    <div className="grid mt-md-n19 mt-xl-n20 mt-xxl-n21 mb-20">
      <div className="row isotope gy-6">
        {testimonials.map((item, index) => (
          <div className="item col-md-6 col-xl-3" key={index}>
            <TestimonialCard1 {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}
