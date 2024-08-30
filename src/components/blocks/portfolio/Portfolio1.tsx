import Image from "next/image";
import Carousel from "components/reuseable/Carousel";
// CUSTOM DATA
import { portfolioList1 } from "data/portfolio";

export default function Portfolio1() {
  const carouselBreakpoints = {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    992: { slidesPerView: 3 }
  };

  return (
    <div className="container-fluid px-md-6">
      <div className="swiper-container blog grid-view mb-17 mb-md-19">
        <Carousel grabCursor breakpoints={carouselBreakpoints}>
          {portfolioList1.map((item) => (
            <figure className="rounded" key={item}>
              <Image src={item} width={900} height={650} alt="project" className="w-100 h-auto" />
            </figure>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
