"use client";

import { Fragment } from "react";
// GLOBAL CUSTOM HOOKS
import useLightBox from "hooks/useLightBox";

// ======================================================
interface Banner4Props {
  imageName?: string;
  hideShape?: boolean;
  btnColor?: "white" | "primary";
}
// ======================================================

export default function Banner4({ hideShape, btnColor = "primary", imageName = "about12" }: Banner4Props) {
  // used for video light box
  useLightBox();

  return (
    <Fragment>
      <a
        data-glightbox
        href="/media/movie.mp4"
        className={`btn btn-circle btn-${btnColor} btn-play ripple mx-auto mb-5 position-absolute`}
        style={{ top: "50%", left: "50%", transform: "translate(-50%,-50%)", zIndex: 3 }}>
        <i className="icn-caret-right" />
      </a>

      {hideShape ? null : (
        <div
          className="shape rounded bg-soft-primary rellax d-md-block"
          style={{ width: "85%", height: "90%", right: "-1.5rem", bottom: "-1.8rem" }}
        />
      )}

      <figure className="rounded">
        <img src={`/img/photos/${imageName}.jpg`} srcSet={`/img/photos/${imageName}@2x.jpg 2x`} alt={imageName} />
      </figure>
    </Fragment>
  );
}
