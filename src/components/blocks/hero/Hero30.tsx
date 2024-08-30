"use client";

import Link from "next/link";
// GLOBAL CUSTOM HOOKS
import useReplaceMe from "hooks/useReplaceMe";

export default function Hero30() {
  useReplaceMe();

  return (
    <div className="container pt-19 pt-md-21 text-center position-relative">
      <div
        data-cue="fadeIn"
        className="position-absolute"
        style={{ top: "-15%", left: "50%", transform: "translateX(-50%)" }}>
        <img src="/img/photos/blurry.png" alt="" />
      </div>

      <div className="row position-relative">
        <div className="col-lg-8 col-xxl-7 mx-auto position-relative">
          <div
            data-cue="fadeIn"
            data-delay="1500"
            className="position-absolute shape grape w-5 d-none d-lg-block"
            style={{ top: "-5%", left: "-15%" }}>
            <img src="/img/svg/pie.svg" className="svg-inject icon-svg w-100 h-100" alt="" />
          </div>

          <div
            data-cue="fadeIn"
            data-delay="1500"
            className="position-absolute shape violet w-10 d-none d-lg-block"
            style={{ bottom: "30%", left: "-20%" }}>
            <img src="/img/svg/scribble.svg" className="svg-inject icon-svg w-100 h-100" alt="" />
          </div>

          <div
            data-cue="fadeIn"
            data-delay="1500"
            className="position-absolute shape fuchsia w-6 d-none d-lg-block"
            style={{ top: "0%", right: "-25%", transform: "rotate(70deg)" }}>
            <img src="/img/svg/tri.svg" className="svg-inject icon-svg w-100 h-100" alt="" />
          </div>

          <div
            data-cue="fadeIn"
            data-delay="1500"
            className="position-absolute shape yellow w-6 d-none d-lg-block"
            style={{ bottom: "25%", right: "-17%" }}>
            <img src="/img/svg/circle.svg" className="svg-inject icon-svg w-100 h-100" alt="" />
          </div>

          <div data-cues="slideInDown" data-group="page-title">
            <h1 className="display-1 fs-64 mb-5 mx-md-10 mx-lg-0">
              We are a digital web agency specializing on <br />
              <span className="rotator-fade text-primary">web design.,SEO services.,e-commerce.,Google Adwords.</span>
            </h1>

            <p className="lead fs-24 mb-8">
              We are an award winning digital web agency that strongly believes in the power of creative ideas.
            </p>
          </div>

          <div className="d-flex justify-content-center" data-cues="slideInDown" data-delay="600">
            <span>
              <Link href="#" className="btn btn-lg btn-primary rounded-xl mx-1">
                See Projects
              </Link>
            </span>

            <span>
              <Link href="#" className="btn btn-lg btn-fuchsia rounded-xl mx-1">
                Contact Us
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
