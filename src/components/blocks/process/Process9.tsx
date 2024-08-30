"use client";

import { Banner4 } from "../banner";
import { ServiceCard3 } from "components/reuseable/service-cards";
// GLOBAL CUSTOM HOOKS
import useLightBox from "hooks/useLightBox";
// CUSTOM DATA
import { processList8 } from "data/process";

export default function Process9() {
  // lighbox hook called
  useLightBox();

  return (
    <div className="row gy-10 gy-sm-13 gx-lg-3 align-items-center mb-14 mb-md-19">
      <div className="col-md-8 col-lg-6 position-relative">
        <Banner4 imageName="about8" />
      </div>

      <div className="col-lg-5 col-xl-4 offset-lg-1">
        <h2 className="fs-15 text-uppercase text-muted mb-3">How It Works?</h2>
        <h3 className="display-4 mb-7">Here are the 3 working steps on success.</h3>

        {processList8.map(({ Icon, id, iconColor, ...item }) => (
          <ServiceCard3 key={id} {...item} Icon={<Icon className={`icon-svg-md text-${iconColor} me-5`} />} />
        ))}
      </div>
    </div>
  );
}
