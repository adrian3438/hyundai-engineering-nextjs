import { Fragment } from "react";
import Carousel from "components/reuseable/Carousel";
import { ProjectCard3 } from "components/reuseable/project-cards";
// CUSTOM UTILS
import carouselBreakpoints from "utils/carouselBreakpoints";
// CUSTOM DATA
import { portfolioList6 } from "data/portfolio";

export default function Portfolio10() {
  return (
    <Fragment>
      <div className="row mt-17">
        <div className="col-lg-10 col-xl-9 col-xxl-8 mx-auto text-center">
          <h2 className="fs-16 text-uppercase text-muted mb-3">Latest Projects</h2>
          <h3 className="display-3 mb-10">
            Check out some of our awesome projects with <span className="underline-3 style-2 yellow">creative</span>{" "}
            ideas and great design.
          </h3>
        </div>
      </div>

      <div className="swiper-container grid-view">
        <Carousel navigation={false} grabCursor breakpoints={carouselBreakpoints}>
          {portfolioList6.map((item) => (
            <ProjectCard3 key={item.id} {...item} />
          ))}
        </Carousel>
      </div>
    </Fragment>
  );
}
