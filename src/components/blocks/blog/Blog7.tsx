import Carousel from "components/reuseable/Carousel";
import { BlogCard1 } from "components/reuseable/blog-cards";
// CUSTOM UTILS
import carouselBreakpoints from "utils/carouselBreakpoints";
// CUSTOM DATA
import { blogList2 } from "data/blog";

export default function Blog7() {
  return (
    <section className="wrapper bg-white">
      <div className="container py-15 py-md-17">
        <div className="row text-center">
          <div className="col-lg-10 col-xl-7 col-xxl-6 mx-auto">
            <h2 className="fs-15 text-uppercase text-muted mb-3">Case Studies</h2>
            <h3 className="display-3 ls-sm mb-10">Our awesome projects with creative ideas and great design.</h3>
          </div>
        </div>

        <div className="swiper-container blog grid-view mb-10">
          <Carousel grabCursor navigation={false} breakpoints={carouselBreakpoints}>
            {blogList2.map((item) => (
              <BlogCard1 key={item.id} {...item} />
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}
