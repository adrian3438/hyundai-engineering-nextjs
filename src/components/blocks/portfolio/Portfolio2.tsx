import Image from "next/image";
// GLOBAL CUSTOM COMPONENTS
import Carousel from "components/reuseable/Carousel";
import NextLink from "components/reuseable/links/NextLink";
// CUSTOM DATA
import { carouselImages } from "data/demo-7";

export default function Portfolio2() {
  return (
    <div className="overflow-hidden">
      <div className="container pb-9 pb-md-14">
        <div className="row">
          <div className="col-lg-9 col-xl-8 col-xxl-7 mx-auto text-center">
            <h3 className="display-4 mb-8">Our Recent Projects</h3>
          </div>
        </div>

        <div className="swiper-container grid-view nav-bottom nav-color mb-14">
          <Carousel
            grabCursor
            slidesPerView={2}
            pagination={false}
            className="overflow-visible"
            breakpoints={{ 768: { slidesPerView: 2 }, 0: { slidesPerView: 1 } }}>
            {carouselImages.map(({ id, url, image }) => (
              <figure className="rounded" key={id}>
                <Image alt="" src={image} width={1100} height={770} className="w-100 h-auto" />
                <NextLink title={<i className="uil uil-link" />} className="item-link" href={url} />
              </figure>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
