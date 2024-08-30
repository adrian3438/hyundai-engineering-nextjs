import { ReactNode } from "react";
import CountUp from "components/reuseable/CountUp";

// ====================================================
interface CounterProps {
  title: string;
  number: number;
  Icon: ReactNode;
  suffix?: string;
}
// ====================================================

export default function Counter3({ title, number, Icon, suffix }: CounterProps) {
  return (
    <div className="col-md-4">
      {Icon}

      <h3 className="counter">
        <CountUp end={number} {...(suffix && { suffix })} />
      </h3>

      <p>{title}</p>
    </div>
  );
}
