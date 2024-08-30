"use client";

import CountUp, { CountUpProps } from "react-countup";

// ==============================================================
interface CounterProps extends CountUpProps {
  title: string;
}
// ==============================================================

export default function Counter4({ title, ...props }: CounterProps) {
  return (
    <div className="col-md-6">
      <h3 className="counter counter-lg mb-1">
        <CountUp {...props} />
      </h3>

      <h5 className="mb-0">{title}</h5>
    </div>
  );
}
