"use client";

import { useEffect } from "react";

export default function useLightBox() {
  const lightboxLoad = () => {
    const GLightbox = require("glightbox");

    GLightbox({
      loop: false,
      moreLength: 0,
      zoomable: false,
      autoplayVideos: true,
      touchNavigation: true,
      selector: "*[data-glightbox]",
      // slideExtraAttributes: { poster: '' },
      plyr: {
        config: {
          fullscreen: { enabled: false, iosNative: false },
          youtube: { noCookie: true, rel: 0, showinfo: 0, iv_load_policy: 3 },
          vimeo: { byline: false, portrait: false, title: false, transparent: false }
        }
      }
    });
  };

  useEffect(() => {
    lightboxLoad();
  }, []);

  return null;
}
