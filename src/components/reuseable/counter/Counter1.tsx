import CountUp from "components/reuseable/CountUp";

// ====================================================
interface CounterProps {
  title: string;
  number: number;
  titleColor?: string;
}
// ====================================================

export default function Counter1({ title, number, titleColor = "" }: CounterProps) {
  return (
    <div className="col-md-4">
      <h3 className={`counter counter-lg ${titleColor}`}>
        <CountUp end={number} suffix="+" />
      </h3>

      <p>{title}</p>
    </div>
  );
}
