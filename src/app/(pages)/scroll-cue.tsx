"use client";

import { useState, useEffect, PropsWithChildren } from "react";
import { usePathname } from "next/navigation";

export default function ScrollCue({ children }: PropsWithChildren) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);

  // scroll animation added
  useEffect(() => {
    (async () => {
      const scrollCue = (await import("plugins/scrollcue")).default;
      scrollCue.init({ interval: -400, duration: 700, percentage: 0.8 });
      scrollCue.update();
    })();
  }, [pathname]);

  // manage loading status
  useEffect(() => {
    setLoading(false);
  }, []);

  return loading ? <div className="page-loader" /> : <>{children}</>;
}
