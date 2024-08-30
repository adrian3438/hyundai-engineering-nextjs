"use client";

import useLightBox from "hooks/useLightBox";

export default function VideoBanner() {
  // used for lightbox modal
  useLightBox();

  return (
    <div className="mt-lg-n20 mt-xl-n22 mb-14 mb-md-16 position-relative">
      <a
        data-glightbox
        href="/media/movie.mp4"
        className="btn btn-circle btn-primary btn-play ripple mx-auto mb-5 position-absolute"
        style={{ zIndex: 3, top: "50%", left: "50%", transform: "translate(-50%,-50%)" }}>
        <i className="icn-caret-right" />
      </a>

      <figure className="rounded shadow">
        <img src="/img/photos/v1.jpg" srcSet="/img/photos/v1@2x.jpg 2x" alt="" />
      </figure>
    </div>
  );
}
