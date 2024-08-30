import Carousel from "components/reuseable/Carousel";
import { BlogCard5 } from "components/reuseable/blog-cards";
// CUSTOM DATA
import { blogList5 } from "data/blog";

export default function Hero25() {
  const carouselBreakpoints = { 0: { slidesPerView: 1 }, 992: { slidesPerView: 2 } };

  return (
    <div className="swiper-container blog grid-view mb-16">
      <Carousel slidesPerView={2} navigation={false} breakpoints={carouselBreakpoints}>
        {blogList5.map((item) => (
          <BlogCard5 key={item.id} {...item} />
        ))}
      </Carousel>
    </div>
  );
}
