import { Fragment } from "react";
import Carousel from "components/reuseable/Carousel";
import { BlogCard1 } from "components/reuseable/blog-cards";
// CUSTOM UTILS
import carouselBreakpoints from "utils/carouselBreakpoints";
// CUSTOM DATA
import { blogList2 } from "data/blog";

export default function Blog4() {
  return (
    <Fragment>
      <div className="row text-center">
        <div className="col-lg-9 col-xl-8 col-xxl-7 mx-auto">
          <h2 className="fs-16 text-uppercase text-gradient gradient-1 mb-3">Case Studies</h2>
          <h3 className="display-4 mb-9 me-lg-n5">
            Check out some of our awesome projects with creative ideas and great design.
          </h3>
        </div>
      </div>

      <div className="swiper-container blog grid-view mb-17 mb-md-20">
        <Carousel grabCursor navigation={false} breakpoints={carouselBreakpoints}>
          {blogList2.map((item) => (
            <BlogCard1 key={item.id} {...item} />
          ))}
        </Carousel>
      </div>
    </Fragment>
  );
}
