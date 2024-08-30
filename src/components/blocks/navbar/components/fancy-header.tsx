import { PropsWithChildren } from "react";

export default function FancyHeader({ children }: PropsWithChildren) {
  return (
    <div className="container">
      <div className="navbar-collapse-wrapper bg-white d-flex flex-row flex-nowrap w-100 justify-content-between align-items-center">
        {children}
      </div>
    </div>
  );
}
