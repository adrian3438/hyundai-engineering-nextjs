import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Select from "components/reuseable/Select";
import Breadcrumb from "components/reuseable/Breadcrumb";
import Pagination from "components/reuseable/Pagination";
import { ProductCard } from "components/reuseable/product-cards";
// CUSTOM DATA
import products from "data/product-list";

export default function Shop() {
  // filter options
  const options = [
    { id: 1, title: "Sort by popularity", value: "popular" },
    { id: 2, title: "Sort by average rating", value: "rating" },
    { id: 3, title: "Sort by newness", value: "new" },
    { id: 4, title: "Sort by price: low to high", value: "low-to-high" },
    { id: 5, title: "Sort by price: high to low", value: "high-to-low" }
  ];

  return (
    <Fragment>
      {/* ========== page title section ========== */}
      <section className="wrapper bg-gray">
        <div className="container py-12 py-md-16 text-center">
          <div className="row">
            <div className="col-lg-10 col-xxl-8 mx-auto">
              <h1 className="display-1 mb-3">Shop Layout</h1>
              <p className="lead mb-1">Integer posuere erat a ante venenatis dapibus.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== products section ========== */}
      <section className="wrapper bg-light">
        <div className="container py-14 py-md-16">
          <div className="row align-items-center mb-10 position-relative zindex-1">
            <div className="col-md-8 col-lg-9 col-xl-8 col-xxl-7 pe-xl-20">
              <h2 className="display-6">New Arrivals</h2>
              <Breadcrumb className="mb-0" />
            </div>

            <div className="col-md-4 col-lg-3 ms-md-auto text-md-end mt-5 mt-md-0">
              <Select options={options} />
            </div>
          </div>

          <div className="row gx-md-8 gy-10 gy-md-13 mb-13">
            {products.map((item) => (
              <ProductCard {...item} key={item.id} className="col-md-6 col-xl-4" />
            ))}
          </div>

          {/* ========== pagination section ========== */}
          <Pagination />
        </div>
      </section>
    </Fragment>
  );
}
