import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Carousel from "components/reuseable/Carousel";
import Breadcrumb from "components/reuseable/Breadcrumb";
import { ProductCard } from "components/reuseable/product-cards";
import ThumbsCarousel from "components/reuseable/ThumbsCarousel";
// LOCAL CUSTOM COMPONENTS
import ProductActions from "../components/product-actions";
import ProductReviews from "../components/product-reviews";
import ProductDescription from "../components/product-description";
import ProductReviewAside from "../components/product-review-aside";
// CUSTOM DATA
import products from "data/product-list";
import data from "data/product-details-page";

export async function generateStaticParams() {
  return [1, 2, 3, 4, 5, 6].map((item) => ({ id: item.toString() }));
}

export default function ProductDetails() {
  const carouselBreakpoints = {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    992: { slidesPerView: 3 }
  };

  return (
    <Fragment>
      {/* ========== breadcumb section ========== */}
      <section className="wrapper bg-gray">
        <div className="container py-3 py-md-5">
          <Breadcrumb data={data.breadcrumb} className="mb-0" />
        </div>
      </section>

      {/* ========== product info section ========== */}
      <section className="wrapper bg-light">
        <div className="container py-14 py-md-16">
          <div className="row gx-md-8 gx-xl-12 gy-8">
            <div className="col-lg-6">
              <ThumbsCarousel />
            </div>

            {/* ========== product actions (size, color, add to cart) section ========== */}
            <ProductActions />
          </div>

          {/* ========== product description tab section ========== */}
          <ProductDescription />
        </div>
      </section>

      {/* ========== liked products section ========== */}
      <section className="wrapper bg-gray">
        <div className="container py-14 py-md-16">
          <h3 className="h2 mb-6 text-center">You Might Also Like</h3>

          <div className="swiper-container blog grid-view shop mb-6">
            <Carousel navigation={false} breakpoints={carouselBreakpoints}>
              {products.slice(0, 5).map((item) => (
                <ProductCard {...item} key={item.id} />
              ))}
            </Carousel>
          </div>
        </div>
      </section>

      <section className="wrapper bg-light">
        <div className="container py-14 py-md-16">
          <div className="row gx-md-8 gx-xl-12 gy-10">
            {/* ========== sidebar section ========== */}
            <ProductReviewAside />

            {/* ========== reviews section ========== */}
            <ProductReviews />
          </div>
        </div>
      </section>
    </Fragment>
  );
}
