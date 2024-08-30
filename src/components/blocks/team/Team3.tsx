import Team from "icons/lineal/Team";
import Carousel from "components/reuseable/Carousel";
import { TeamCard1 } from "components/reuseable/team-cards";
// CUSTOM DATA
import teams from "data/team-list";

export default function Team3() {
  const carouselBreakpoints = {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    992: { slidesPerView: 3 },
    1200: { slidesPerView: 4 }
  };

  return (
    <section className="wrapper bg-light">
      <div className="container py-14 py-md-16">
        <div className="row mb-3">
          <div className="col-md-10 col-xl-9 col-xxl-7 mx-auto text-center">
            <Team className="icon-svg-md mb-4" />
            <h2 className="display-4 mb-3 px-lg-14">Save your time and money by choosing our professional team.</h2>
          </div>
        </div>

        <div className="position-relative">
          <div
            className="shape rounded-circle bg-soft-yellow rellax w-16 h-16"
            style={{ bottom: "0.5rem", right: "-1.7rem" }}
          />

          <div
            className="shape rounded-circle bg-line red rellax w-16 h-16"
            style={{ top: "0.5rem", left: "-1.7rem" }}
          />

          <div className="swiper-container dots-closer mb-6">
            <Carousel grabCursor spaceBetween={0} navigation={false} breakpoints={carouselBreakpoints}>
              {teams.map((item) => (
                <div className="item-inner" key={item.id}>
                  <TeamCard1 {...item} />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
