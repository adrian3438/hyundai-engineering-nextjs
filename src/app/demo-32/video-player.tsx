"use client";

import useLightBox from "hooks/useLightBox";

export default function VideoPlayer() {
  // used for popup lightbox
  useLightBox();

  return (
    <figure data-delay="250" data-cues="fadeIn" className="rounded mt-n21 mt-lg-n23 mb-16 mb-md-18 position-relative">
      <a
        data-glightbox
        href="/media/movie3.mp4"
        className="btn btn-circle btn-white btn-play ripple mx-auto position-absolute"
        style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: 3 }}>
        <i className="icn-caret-right" />
      </a>

      <video
        loop
        muted
        autoPlay
        playsInline
        src="/media/movie3.mp4"
        poster="/img/photos/movie3.jpg"
        className="w-100 rounded caption-overlay d-block"
      />
    </figure>
  );
}
