"use client";

// GLOBAL CUSTOM HOOKS
import useProgressbar from "hooks/useProgressbar";
// CUSTOM DATA
import data from "data/product-details-page";

export default function ProductReviewAside() {
  // USED FOR PROGRESS BAR ANIMATE
  useProgressbar();

  return (
    <aside className="col-lg-4 sidebar">
      <div className="widget mt-1">
        <h4 className="widget-title mb-3">Ratings Distribution</h4>

        <div className="mb-5">
          <span className="ratings four" />
          <span>4.2 out of 5</span>
        </div>

        <ul className="progress-list">
          {data.ratings.map(({ star, value }) => (
            <li key={star}>
              <p>{star} Stars</p>
              <div className="progressbar line blue" data-value={value} />
            </li>
          ))}
        </ul>
      </div>

      <div className="widget mt-10">
        <h4 className="widget-title mb-3">Review this product</h4>
        <p className="mb-5">Aenean eu leo quam ornare sem lacinia quam.</p>
        <a href="#" className="btn btn-primary rounded w-100">
          Write a Review
        </a>
      </div>
    </aside>
  );
}
