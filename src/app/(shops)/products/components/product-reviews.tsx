// GLOBAL CUSTOM COMPONENTS
import Select from "components/reuseable/Select";
import Pagination from "components/reuseable/Pagination";
import ReviewCard from "components/reuseable/ReviewCard";
// CUSTOM DATA
import data from "data/product-details-page";

export default function ProductReviews() {
  return (
    <div className="col-lg-8">
      <div className="row align-items-center mb-10 position-relative zindex-1">
        <div className="col-md-7 col-xl-8 pe-xl-20">
          <h2 className="display-6 mb-0">Ratings &amp; Reviews</h2>
        </div>

        <div className="col-md-5 col-xl-4 ms-md-auto text-md-end mt-5 mt-md-0">
          <div className="form-select-wrapper">
            <Select options={data.options} />
          </div>
        </div>
      </div>

      <div id="comments">
        <ol id="singlecomments" className="commentlist">
          {data.reviewList.map((item) => (
            <ReviewCard key={item.id} {...item} />
          ))}
        </ol>
      </div>

      {/* ========== pagination section ========== */}
      <Pagination className="mt-10" />
    </div>
  );
}
